const fs = require('fs');
const path = require('path');
const async = require('async');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg, cb) {
    fs.appendFile(file, msg + '\n', cb);
}

console.time('Thread idle');
async.tryEach([
  (cb) => fs.stat(logDir, cb),
  (cb) => fs.mkdir(logDir, cb),
], (err) => {
  if (err) {
    return console.log(err);
  }
  next();
});

console.timeEnd('Thread idle');

// callback hell / pyramid of doom
function next() {
    async.series([
      (cb) => log(logFile, 'Ligne 1', cb),
      (cb) => log(logFile, 'Ligne 2', cb),
      (cb) => log(logFile, 'Ligne 3', cb),
      (cb) => log(logFile, 'Ligne 4', cb),
      (cb) => log(logFile, 'Ligne 5', cb),
    ], (err) => {
      if (err) {
        console.log(err);
      }
    })
}
