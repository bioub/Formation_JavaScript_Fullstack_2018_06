const path = require('path');
// const bluebird = require('bluebird');
const fs = require('fs-extra');
// const fs = bluebird.promisifyAll(require('fs'));

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  return fs.appendFile(file, msg + '\n');
}

console.time('Thread idle');
fs.stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .catch((err) => console.log(err));
console.timeEnd('Thread idle');
