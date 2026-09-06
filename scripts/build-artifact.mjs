/**
 * Builds a single self-contained HTML file.
 *
 * The normal build emits an index.html plus a dozen JS and CSS chunks, which
 * needs a web server. Some targets have no server at all — a published
 * artifact, a file opened from disk, a page pasted into a viewer. This script
 * produces one file that works in all of them.
 *
 * What it does:
 *   1. Builds with VITE_ROUTER=hash (no SPA fallback available) and all chunks
 *      inlined into the entry, so there is nothing left to fetch.
 *   2. Inlines every stylesheet and every module script into the HTML.
 *   3. Strips the document wrapper, because the publishing target supplies its
 *      own <!doctype>/<html>/<head>/<body> and expects only the contents.
 *
 * Usage: node scripts/build-artifact.mjs [outFile]
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist-single');
const outFile = process.argv[2]
  ? resolve(process.argv[2])
  : join(root, 'dist-single', 'cosmos-atlas.html');

rmSync(outDir, { recursive: true, force: true });

console.log('Building single-file bundle…');
execFileSync(
  'npx',
  ['vite', 'build', '--outDir', 'dist-single', '--config', 'vite.config.single.ts'],
  { cwd: root, stdio: 'inherit', env: { ...process.env, VITE_ROUTER: 'hash' } },
);

const htmlPath = join(outDir, 'index.html');
let html = readFileSync(htmlPath, 'utf8');

/** Reads an emitted asset by the src/href the built HTML refers to. */
function readAsset(url) {
  const relative = url.replace(/^\.?\//, '');
  return readFileSync(join(outDir, relative), 'utf8');
}

let inlinedScripts = 0;
let inlinedStyles = 0;

html = html.replace(/<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (match, href) => {
  if (/^https?:/.test(href)) return match;
  inlinedStyles += 1;
  return `<style>\n${readAsset(href)}\n</style>`;
});

html = html.replace(
  /<script[^>]*type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g,
  (match, src) => {
    if (/^https?:/.test(src)) return match;
    inlinedScripts += 1;
    return `<script type="module">\n${readAsset(src)}\n</script>`;
  },
);

// Modulepreload hints point at files that no longer need fetching.
html = html.replace(/<link[^>]+rel="modulepreload"[^>]*>/g, '');

if (inlinedScripts === 0) {
  throw new Error('No module script was inlined — the build output changed shape.');
}
if (/(?:src|href)="\.?\/assets\//.test(html)) {
  throw new Error('An external asset reference survived inlining.');
}

// Keep only what goes inside <body>, plus the <title> and <style>/<link> from
// <head>: the publishing target wraps this in its own document skeleton.
const headMatch = /<head>([\s\S]*?)<\/head>/i.exec(html);
const bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
if (!headMatch || !bodyMatch) throw new Error('Could not find <head>/<body> in the built HTML.');

const head = headMatch[1];
// Vite emits the entry script into <head>, so the inlined module has to be
// carried across too — dropping it produced a stylesheet with no application.
// The icon link is deliberately not carried: the publishing target sets its own.
const keptHead = [
  ...(head.match(/<title>[\s\S]*?<\/title>/gi) ?? []),
  ...(head.match(/<style>[\s\S]*?<\/style>/gi) ?? []),
  ...(head.match(/<script\b[^>]*>[\s\S]*?<\/script>/gi) ?? []),
].join('\n');

const single = `${keptHead}\n${bodyMatch[1].trim()}\n`;

// The application script is the whole point of the file; make its absence loud.
if (!/<script[^>]*type="module"[^>]*>[\s\S]*createRoot/.test(single)) {
  throw new Error('The application script did not survive assembly.');
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, single, 'utf8');

const kb = (Buffer.byteLength(single) / 1024).toFixed(0);
console.log(
  `\nWrote ${outFile} (${kb} KB) — ${inlinedScripts} script(s), ${inlinedStyles} stylesheet(s) inlined.`,
);
