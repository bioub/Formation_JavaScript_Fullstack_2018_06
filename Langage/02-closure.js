function externe(msg) {

  // Closure : portée sauvegardée
  // 1/ fonction dans une fonction/bloc
  // 2/ fonction interne soit appelée en dehors (return, objet, callback async)

  function interne() {
    console.log(msg);
  }

  return interne;
}

const helloFct = externe('Hello');
console.log(typeof interne); // undefined
helloFct();

// pile d'appels
// ^
// |
// |
// |
// |
// |
// |externe - interne/helloFct
// +-------------------------------------------> temps


// Dans 1s : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

// Dans 1s : 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 0);
}

// Dans 1s : 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}
