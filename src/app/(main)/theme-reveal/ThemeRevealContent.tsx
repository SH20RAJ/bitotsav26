"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ThemeRevealContent() {
  return (
    <div className="min-h-screen bg-[#05020a] text-white relative overflow-hidden">

      {/* Subtle grain overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6">

        {/* Single subtle ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/[0.04] rounded-full blur-[200px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Overline */}
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059]/60 mb-10 font-medium">
            The 35th Edition
          </p>

          {/* Title */}
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-heading font-bold text-white leading-[0.9] tracking-tight mb-6">
            BITOTSAV
          </h1>

          {/* Thin divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 h-px bg-[#C5A059]/40 mx-auto mb-8"
          />

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/40 font-light tracking-wide max-w-md mx-auto mb-16">
            Where tradition meets tomorrow.
          </p>

          {/* CTA */}
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#C5A059] text-[#05020a] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#D4AF5F] transition-colors duration-300"
            >
              Register Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ── Details Section ── */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.6em] text-white/20 mb-20 text-center"
          >
            Details
          </motion.p>

          {/* Three columns — text only, no icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center mb-32"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">When</p>
              <p className="text-lg font-medium text-white/90">Feb 13 — 16, 2026</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">Where</p>
              <p className="text-lg font-medium text-white/90">BIT Mesra, Ranchi</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-3">Starts</p>
              <p className="text-lg font-medium text-white/90">10:00 AM IST</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 mb-32" />

          {/* About block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.6em] text-white/20 mb-10">About</p>
            <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mb-8">
              Four days. One campus. Thousands of stories waiting to unfold. Bitotsav is BIT Mesra&apos;s 
              premier cultural, sports &amp; technical festival — a celebration that has defined college life 
              for 35 years.
            </p>
            <p className="text-sm text-white/25 leading-relaxed">
              Competitions, performances, exhibitions, and connections that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Registration CTA ── */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-px bg-[#C5A059]/30 mx-auto mb-12" />
            
            <p className="text-2xl md:text-3xl font-light text-white/70 mb-6">
              Ready to be part of it?
            </p>
            <p className="text-sm text-white/30 mb-12 max-w-sm mx-auto">
              Registration is open for BIT Mesra students. Sign in with your webmail to get started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 bg-[#C5A059] text-[#05020a] text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#D4AF5F] transition-colors duration-300"
                >
                  Register with Webmail
                </motion.button>
              </Link>
              <Link href="/events">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 border border-white/10 text-white/50 text-xs font-medium uppercase tracking-[0.25em] hover:border-white/30 hover:text-white/80 transition-all duration-300"
                >
                  Browse Events
                </motion.button>
              </Link>
            </div>

            <p className="text-[11px] text-white/15 mt-10">
              Only <span className="text-[#C5A059]/40">@bitmesra.ac.in</span> emails are accepted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Logo Footer ── */}
      <section className="pb-20 px-6">
        <div className="flex justify-center opacity-20 hover:opacity-40 transition-opacity duration-500">
          <Image src="/icons/home.png" alt="Bitotsav" width={48} height={48} className="grayscale" />
        </div>
      </section>
    </div>
  );
}
