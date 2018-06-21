const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello from http');
  res.end();
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('Server started');
});
