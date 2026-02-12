import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, '../public/fonts');

if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
}

const fontUrls = [
    { name: 'Cinzel', url: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap' },
    { name: 'PlayfairDisplay', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap' },
    { name: 'Lato', url: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' }
];

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {}); 
            reject(err);
        });
    });
}

async function fetchCss(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function processFont(fontConfig) {
    const { name, url: cssUrl } = fontConfig;
    console.log(`Processing ${name}...`);
    try {
        const css = await fetchCss(cssUrl);
        
        // Split by @font-face to handle blocks independently
        const blocks = css.split('@font-face').slice(1); // skip empty first part
        
        let index = 0;
        for (const block of blocks) {
            // Find subset comment
            // The comment is usually BEFORE the @font-face in the original CSS, 
            // but since we split by @font-face, the comment for the CURRENT block 
            // was actually at the end of the PREVIOUS block.
            // This splitting strategy is flawed for capturing comments if they are outside braces.
            // Better strategy: Regex capture everything.
        }

        // Improved regex strategy
        // Matches: /* subset */ @font-face { ... src: url(url) ... font-style: style; font-weight: weight; ... }
        // Note: comments are optional and might not be strictly adjacent in all minifed versions, but usually are.
        
        // Let's iterate line by line or use a state machine logic roughly.
        
        const subsetRegex = /\/\*\s*([a-zA-Z0-9-]+)\s*\*\//;
        const srcRegex = /src:\s*url\((https?:\/\/[^)]+)\)/;
        const weightRegex = /font-weight:\s*([^;]+);/;
        const styleRegex = /font-style:\s*([^;]+);/;
        
        // We will parse the raw CSS string manually roughly.
        // Google Fonts CSS is pretty standard.
        // Format:
        // /* subset */
        // @font-face {
        //   font-family: 'Family';
        //   font-style: normal;
        //   font-weight: 400;
        //   src: url(...) format('woff2');
        //   unicode-range: ...;
        // }
        
        const lines = css.split('\n');
        let currentSubset = 'unknown';
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line.match(subsetRegex)) {
                currentSubset = line.match(subsetRegex)[1];
            }
            
            if (line.includes('src: url')) {
                const srcMatch = line.match(/url\(([^)]+)\)/);
                if (srcMatch) {
                    const fontUrl = srcMatch[1];
                    // finding style and weight by looking backwards a few lines or forwards
                    // Assuming they are in the same block.
                    // Let's extract the full block first? No, simple loop is fine.
                    
                    // We need a unique filename.
                    // Pattern: Family-Subset-Style-Weight.woff2
                    // But wait, "400 900" is a range for variable fonts.
                    
                    // Let's Find the style and weight in the surrounding lines
                    let weight = '400';
                    let style = 'normal';
                    
                    // Scan backwards/forwards in this block (lines i-5 to i+5)
                    // Actually, better to parse blocks.
                }
            }
        }
        
        // Re-do with block splitting which keeps delimiters? 
        // Or just matching the whole block pattern.
        
        const blockRegex = /\/\*\s*([a-zA-Z0-9-]+)\s*\*\/\s*@font-face\s*{([^}]+)}/g;
        let match;
        
        while ((match = blockRegex.exec(css)) !== null) {
            const subset = match[1];
            const content = match[2];
            
            const urlMatch = content.match(/src:\s*url\((https?:\/\/[^)]+)\)/);
            const weightMatch = content.match(/font-weight:\s*([^;]+);/);
            const styleMatch = content.match(/font-style:\s*([^;]+);/);
            
            if (urlMatch) {
                const fontUrl = urlMatch[1];
                const weight = weightMatch ? weightMatch[1].replace(/\s+/g, '') : '400';
                const style = styleMatch ? styleMatch[1] : 'normal';
                
                const filename = `${name}-${subset}-${style}-${weight}.woff2`;
                const dest = path.join(fontsDir, filename);
                
                console.log(`Downloading ${filename}...`);
                await downloadFile(fontUrl, dest);
            }
        }

    } catch (error) {
        console.error(`Error processing ${name}:`, error);
    }
}


(async () => {
    for (const font of fontUrls) {
        await processFont(font);
    }
    console.log('Done.');
})();
