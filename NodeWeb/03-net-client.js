const net = require('net');

const socket = net.connect(80, 'www.google.fr');

socket.pipe(process.stdout);

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.google.fr\r\n');
  socket.end('\r\n');
});

socket.on('error', (err) => {
  console.log(err);
});
