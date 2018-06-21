const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.pipe(process.stdout);

  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n\r\n');
  socket.write('Hello from server!!!!\r\n');
  socket.end('\r\n');
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080);
