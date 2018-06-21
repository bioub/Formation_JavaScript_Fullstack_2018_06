import { readFileSync } from 'fs';
import { resolve } from 'path';

const configLocalPath = resolve(__dirname, 'config.local.json');
const configDefaultPath = resolve(__dirname, 'config.default.json');

let configLocal = {};

try {
  const configLocalStr = readFileSync(configLocalPath, {encoding: 'utf-8'});
  configLocal = JSON.parse(configLocalStr);
} catch (err) {
}

const configDefaultStr = readFileSync(configDefaultPath, {encoding: 'utf-8'});

const configDefault = JSON.parse(configDefaultStr);

export const config = Object.assign({}, configDefault, configLocal);

