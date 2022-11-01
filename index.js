import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import transform from '@doc-tools/transform';
import includePlugin from '@doc-tools/transform/lib/plugins/includes/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = `index.md`;
const content = fs.readFileSync(filePath, 'utf-8');

const {
  result: { html },
} = transform(content, {
  root: __dirname,
  path: filePath,
  vars: { condition: 'true' },
  conditionsInCode: true,
  plugins: [includePlugin],
});

console.log(html);
