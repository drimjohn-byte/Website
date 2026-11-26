// Generates out/audio.wav: warm pad + whoosh on each cut + wind under the cloud pour + a low hit on the payoff.
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const here = dirname(fileURLToPath(import.meta.url));
const SR = 48000, DUR = 15, N = SR * DUR;
const L = new Float32Array(N), R = new Float32Array(N);
let seed = 12345; const rnd = () => ((seed = (seed * 1103515245 + 12345) >>> 0) / 4294967296) * 2 - 1;
const CUTS = [2.4, 5.0, 7.8, 10.6, 13.4];
// chords (Hz) per section: Am9 -> Fmaj7 -> C -> G -> Am -> F(add9)
const CH = [[0, [110, 164.8, 246.9, 329.6, 493.9]], [2.4, [87.3, 130.8, 220, 329.6, 440]], [5.0, [130.8, 196, 261.6, 329.6, 392]],
            [7.8, [98, 146.8, 246.9, 293.7, 392]], [10.6, [110, 164.8, 220, 261.6, 329.6]], [13.4, [87.3, 174.6, 261.6, 349.2, 392]]];
const ph = new Float64Array(10);
let lp1 = 0, lp2 = 0, wl = 0;
for (let i = 0; i < N; i++) {
  const t = i / SR;
  let ci = 0; for (let k = 0; k < CH.length; k++) if (t >= CH[k][0]) ci = k;
  const since = t - CH[ci][0], prev = CH[Math.max(0, ci - 1)][1];
  const xf = ci === 0 ? 1 : Math.min(1, since / 0.25);
  let pad = 0;
  CH[ci][1].forEach((fq, k) => {
    const fr = prev[k] + (fq - prev[k]) * xf;
    ph[k] += 2 * Math.PI * fr / SR; ph[k + 5] += 2 * Math.PI * fr * 1.004 / SR;
    pad += (Math.sin(ph[k]) + 0.5 * Math.sin(ph[k + 5]) + 0.15 * Math.sin(2 * ph[k])) / (k + 1.5);
  });
  const env = Math.min(1, t / 0.04) * Math.min(1, (DUR - t) / 0.25);
  let s = pad * 0.16 * env;
  // whooshes: swept low-passed noise
  const n = rnd();
  let wh = 0;
  for (const c of CUTS) { const d = t - c + 0.18; if (d > 0 && d < 0.5) wh += Math.sin(Math.PI * d / 0.5) ** 2; }
  const cut = 0.04 + 0.25 * wh; lp1 += cut * (n - lp1); lp2 += cut * (lp1 - lp2);
  s += lp2 * wh * 0.9;
  // wind bed during the tablecloth pour
  const wind = t > 10.8 ? Math.min(1, (t - 10.8) / 1.5) * (t < 13.4 ? 1 : Math.max(0, 1 - (t - 13.4) / 1.4)) : 0;
  wl += 0.02 * (n - wl); s += wl * wind * 1.6 * (0.7 + 0.3 * Math.sin(t * 3));
  // low hit on the payoff
  const hd = t - 13.4; if (hd > 0 && hd < 1.2) s += Math.sin(2 * Math.PI * (48 + 30 * Math.exp(-hd * 8)) * hd) * Math.exp(-hd * 3.5) * 0.45;
  const pan = Math.sin(t * 0.7) * 0.15;
  L[i] = Math.tanh(s * (1 - pan)); R[i] = Math.tanh(s * (1 + pan));
}
const buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVEfmt ', 8); buf.writeUInt32LE(16, 16);
buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28);
buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) { buf.writeInt16LE(Math.round(L[i] * 32000), 44 + i * 4); buf.writeInt16LE(Math.round(R[i] * 32000), 46 + i * 4); }
mkdirSync(join(here, 'out'), { recursive: true }); writeFileSync(join(here, 'out', 'audio.wav'), buf);
console.log('wrote audio.wav');
