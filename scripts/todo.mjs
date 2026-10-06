// Lists every outstanding content placeholder: `npm run todo`.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../src', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(astro|ts|md|json)$/.test(name)) {
      readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        if (line.includes('TO UPDATE') || /<TBD\b|kind: 'tbd'|"file": null/.test(line)) hits.push(`${relative(root, p)}:${i + 1}  ${line.trim().slice(0, 140)}`);
      });
    }
  }
}
walk(root);
console.log(hits.join('\n'));
console.log(`\n${hits.length} placeholder lines.`);
