// pile d'appels
// ^
// |
// |
// |
// |
// |                         log   log       log
// |st - st - st - log ..... cb1 - cb3 ..... cb2
// +-------------------------500-------------1000-|----> temps
// sortie :        Fin       cb1   cb3       cb2

// file d'attente (500ms) : cb1 - cb3
// file d'attente (501ms) : cb3
// file d'attente (502ms) :
// file d'attente (1000ms) : cb2
// file d'attente (1001ms) :

setTimeout(function() {
  console.log('cb1');
}, 500);

setTimeout(function() {
  console.log('cb2');
}, 1000);

setTimeout(function() {
  console.log('cb3');
}, 500);

/*
setTimeout(function() {
  console.log('cb4');
}, Math.floor(Math.random() * 1000));
*/

console.log('Fin');

