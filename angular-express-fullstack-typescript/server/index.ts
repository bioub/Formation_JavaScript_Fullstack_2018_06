import { createServer } from 'http';
import { app } from './app';
import { config } from './config';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test');

const server = createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
})
