'use strict';
const assert = require('assert'); // binaire Node.js
const chalk = require('chalk'); // node_modules/chalk
const myMaths = require('./my-maths'); // fichier du projet (./ ou ../)

try {
  assert.strictEqual(myMaths.sum(1, 2), 3);
  console.log(chalk.green('Tests sum succeed'));
}
catch (err) {
  console.log(chalk.red('Tests sum failed'));
}
