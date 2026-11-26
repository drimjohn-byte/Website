// Usage: node render.mjs            -> out/table-mountain.mp4 (with audio)
//        node render.mjs --stills 0,80,200,300,380,449  -> out/f-<n>.png
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'out'); mkdirSync(out, { recursive: true });
const stillsArg = process.argv.indexOf('--stills');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(pathToFileURL(join(here, 'scene.html')).href);
await page.evaluate(() => window.ready);
const grab = (f, type) => page.evaluate(([f, type]) => { draw(f); return document.getElementById('c').toDataURL(type, 0.93); }, [f, type]);

if (stillsArg > -1) {
  for (const f of process.argv[stillsArg + 1].split(',').map(Number)) {
    const d = await grab(f, 'image/png');
    writeFileSync(join(out, `f-${f}.png`), Buffer.from(d.split(',')[1], 'base64'));
  }
  await browser.close(); process.exit(0);
}

execFileSync('node', [join(here, 'audio.mjs')], { stdio: 'inherit' });
const mp4 = join(out, 'table-mountain.mp4');
const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '30', '-c:v', 'mjpeg', '-i', '-',
  '-i', join(out, 'audio.wav'), '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p',
  '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', mp4], { stdio: ['pipe', 'inherit', 'inherit'] });
for (let f = 0; f < 450; f++) {
  const d = await grab(f, 'image/jpeg');
  if (!ff.stdin.write(Buffer.from(d.split(',')[1], 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
  if (f % 90 === 0) process.stdout.write(`frame ${f}\n`);
}
ff.stdin.end();
await new Promise((r, j) => ff.on('close', c => c ? j(new Error('ffmpeg ' + c)) : r()));
await browser.close();
console.log('wrote', mp4);
