const { EventEmitter } = require('events');

const event = new EventEmitter();

function createUser(user) {
  // todo insert in mongo

  event.emit('user.created', user);
}



event.on('user.created', (user) => {
  console.log(`User ${user} created`);
})

createUser('Romain')
