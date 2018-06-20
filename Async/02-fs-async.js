const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg, cb) {
    fs.appendFile(file, msg + '\n', cb);
}

console.time('Thread idle');
fs.stat(logDir, (err, stats) => {
    if (err && err.code === 'ENOENT') {
        return fs.mkdir(logDir, (err) => {
            if (err) {
                return console.log(err);
            }
            next();
        })
    }
    else if (err) {
        return console.log(err);
    }

    next();
});
console.timeEnd('Thread idle');

// callback hell / pyramid of doom
function next() {
    log(logFile, 'Ligne 1', (err) => {
        if (err) {
            return console.log(err);
        }
        log(logFile, 'Ligne 2', (err) => {
            if (err) {
                return console.log(err);
            }
            log(logFile, 'Ligne 3', (err) => {
                if (err) {
                    return console.log(err);
                }
                log(logFile, 'Ligne 4', (err) => {
                    if (err) {
                        return console.log(err);
                    }
                    log(logFile, 'Ligne 5', (err) => {
                        if (err) {
                            return console.log(err);
                        }
                    });
                });
                
            });
        });
    });
}