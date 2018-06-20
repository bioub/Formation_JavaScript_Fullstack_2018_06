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

// 0 + 2 = 2
// 2 + 3 = 5
// 5 + 4 = 9
const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log(sum);

console.log('Fin');

