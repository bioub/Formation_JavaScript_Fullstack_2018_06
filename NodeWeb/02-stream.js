const fs = require('fs');

const readStream = fs.createReadStream('.editorconfig');
readStream.pipe(process.stdout);
/*
fs.readFile('.editorconfig', (err, buffer) => {
  if (err) {
    return console.log(err);
  }
  process.stdout.write(buffer.toString());
});
*/

// cat .editorconfig | grep indent | echo
