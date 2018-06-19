// pile d'appels
// ^
// |
// |
// |
// |                         log  log
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach  - log
// +-------------------------------------------> temps
// sortie :                  4    16    Fin
const nbs = [2, 3, 4];

// programmation fonctionnelle : les fonctions remplacent un algo
// sur les tableaux : new in ES5 (IE8+)
nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach(function(nb) {
    console.log(nb);
  });

console.log('Fin');

