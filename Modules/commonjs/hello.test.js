const assert = require('assert'); // binaire Node.js
const chalk = require('chalk'); // node_modules/chalk
const hello = require('./hello'); // fichier du projet (./ ou ../)

try {
  assert.strictEqual(hello('Romain'), 'Hello ROMAIN !');
  console.log(chalk.green('Tests hello succeed'));
}
catch (err) {
  console.log(chalk.red('Tests hello failed'));
}
