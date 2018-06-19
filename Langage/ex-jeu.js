// pile d'appels
// ^
// |
// |
// |
// |                                                   question              question
// |                            question         log - jouer           log - jouer
// |require - createInterface - jouer    ....... =>             ...... =>
// +---------------------------------------------ENTREE----------------ENTREE-----> temps
// sortie :

function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' | '));
  }

  rl.question('What do you think of Node.js? ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();