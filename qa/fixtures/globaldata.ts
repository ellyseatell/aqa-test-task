import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

let data: any = {};
const filePath = join(__dirname, 'globalData.json');

if (existsSync(filePath)) {
  data = JSON.parse(readFileSync(filePath, 'utf-8'));
  console.log('Loaded global data in tests:', data);
}

export const globalData = data;