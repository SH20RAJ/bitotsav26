"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Pointer {
  x?: number;
  y?: number;
}

interface Particle {
  ox: number;
  oy: number;
  cx: number;
  cy: number;
  or: number;
  cr: number;
  pv: number;
  ov: number;
  f: number;
  rgb: number[];
  draw: (ctx: CanvasRenderingContext2D) => void;
  move: (interactionRadius: number, hasPointer: boolean, pointer: Pointer, ctx: CanvasRenderingContext2D) => boolean;
}

interface TextBox {
  str: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}

export interface ParticleTextEffectProps {
  text?: string;
  colors?: string[];
  className?: string;
  animationForce?: number;
  particleDensity?: number;
}

const rand = (max = 1, min = 0, dec = 0): number => {
  return +(min + Math.random() * (max - min)).toFixed(dec);
};

class ParticleClass implements Particle {
  ox: number;
  oy: number;
  cx: number;
  cy: number;
  or: number;
  cr: number;
  pv: number;
  ov: number;
  f: number;
  rgb: number[];

  constructor(x: number, y: number, animationForce: number, rgb: number[] = [rand(128), rand(128), rand(128)]) {
    this.ox = x;
    this.oy = y;
    this.cx = x;
    this.cy = y;
    this.or = rand(5, 1);
    this.cr = this.or;
    this.pv = 0;
    this.ov = 0;
    this.f = rand(animationForce + 15, animationForce - 15);
    this.rgb = rgb.map(c => Math.max(0, c + rand(13, -13)));
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgb(${this.rgb.join(',')})`;
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.cr, 0, 2 * Math.PI);
    ctx.fill();
  }

  move(interactionRadius: number, hasPointer: boolean, pointer: Pointer, ctx: CanvasRenderingContext2D) {
    let moved = false;

    if (hasPointer && pointer.x !== undefined && pointer.y !== undefined) {
      const dx = this.cx - pointer.x;
      const dy = this.cy - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < interactionRadius && dist > 0) {
        const force = Math.min(this.f, (interactionRadius - dist) / dist * 2);
        this.cx += (dx / dist) * force;
        this.cy += (dy / dist) * force;
        moved = true;
      }
    }

    const odx = this.ox - this.cx;
    const ody = this.oy - this.cy;
    const od = Math.hypot(odx, ody);

    if (od > 1) {
      const restore = Math.min(od * 0.1, 3);
      this.cx += (odx / od) * restore;
      this.cy += (ody / od) * restore;
      moved = true;
    }

    this.draw(ctx);
    return moved;
  }
}

const ParticleTextEffect: React.FC<ParticleTextEffectProps> = ({
  text = 'HOVER!',
  colors = [
    'ffad70', 'f7d297', 'edb9a1', 'e697ac', 'b38dca',
    '9c76db', '705cb5', '43428e', '2c2142'
  ],
  className = '',
  animationForce = 80,
  particleDensity = 4,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<Pointer>({});
  const hasPointerRef = useRef<boolean>(false);
  const interactionRadiusRef = useRef<number>(100);

  const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  const [textBox] = useState<TextBox>({ str: text });

  const dottify = React.useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas || !textBox.x || !textBox.y || !textBox.w || !textBox.h) return;

    const data = ctx.getImageData(textBox.x, textBox.y, textBox.w, textBox.h).data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pixels = data.reduce((arr: any[], _, i, d) => {
      if (i % 4 === 0) {
        arr.push({
          x: (i / 4) % textBox.w!,
          y: Math.floor((i / 4) / textBox.w!),
          rgb: d.slice(i, i + 4),
        });
      }
      return arr;
    }, []).filter(p => p.rgb[3] && !(p.x % particleDensity) && !(p.y % particleDensity));

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixels.forEach((p, i) => {
      particlesRef.current[i] = new ParticleClass(
        textBox.x! + p.x,
        textBox.y! + p.y,
        animationForce,
        p.rgb.slice(0, 3)
      );
      particlesRef.current[i].draw(ctx);
    });

    particlesRef.current.splice(pixels.length, particlesRef.current.length);
  }, [textBox, particleDensity, animationForce]); // Added dependencies

  const write = React.useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    // Adjust font size based on container width and text length to fit better
    const fontSizeBasedOnWidth = canvas.width / (textBox.str.length * 0.8);
    const fontSizeBasedOnHeight = canvas.height * 0.8; 
    textBox.h = Math.min(fontSizeBasedOnWidth, fontSizeBasedOnHeight);

    interactionRadiusRef.current = Math.max(50, textBox.h * 1.5);

    ctx.font = `900 ${textBox.h}px Verdana, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    textBox.w = Math.round(ctx.measureText(textBox.str).width);
    textBox.x = 0.5 * (canvas.width - textBox.w);
    textBox.y = 0.5 * (canvas.height - textBox.h);

    const gradient = ctx.createLinearGradient(textBox.x, textBox.y, textBox.x + textBox.w, textBox.y + textBox.h);
    const N = colors.length - 1;
    colors.forEach((c, i) => gradient.addColorStop(i / N, `#${c}`));
    ctx.fillStyle = gradient;

    ctx.fillText(textBox.str, 0.5 * canvas.width, 0.5 * canvas.height);
    dottify();
  }, [textBox, colors, dottify]);

  const animate = React.useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesRef.current.forEach(p => p.move(interactionRadiusRef.current, hasPointerRef.current, pointerRef.current, ctx));
    animationIdRef.current = requestAnimationFrame(animate);
  }, []);

  const initialize = React.useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    write();
  }, [canvasSize, write]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const parent = canvasRef.current.parentElement;
        setCanvasSize({
          width: parent.clientWidth,
          height: parent.clientHeight,
        });
      }
    };

    handleResize(); // Initial size

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    initialize();
  }, [text, colors, animationForce, particleDensity, canvasSize, initialize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctxRef.current = ctx;
    initialize();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [initialize]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    pointerRef.current.x = (e.clientX - rect.left) * scaleX;
    pointerRef.current.y = (e.clientY - rect.top) * scaleY;
    hasPointerRef.current = true;

    if (!animationIdRef.current) animate();
  };

  const handlePointerLeave = () => {
    hasPointerRef.current = false;
    pointerRef.current.x = undefined;
    pointerRef.current.y = undefined;

    if (!animationIdRef.current) animate();
  };

  const handlePointerEnter = () => {
    hasPointerRef.current = true;
  };

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className} cursor-none pointer-events-auto`}
      style={{ touchAction: 'none' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerEnter}
    />
  );
};

export { ParticleTextEffect };
