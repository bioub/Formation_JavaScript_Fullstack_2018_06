const random = {
  // 1 - Method properties
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};






const readline = require('readline');

// 2 - class
function Jeu(options) {

  // 3 - Default value
  options = options || {};

  // 4 - Destructurer avec default value (page 125)
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._entierAlea = random.getIntInclusive(min, max);
  this._essais = [];
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 5 - Template String
    console.log('Vous avez déjà joué : ' + this._essais.join(' | '));
  }

  this._rl.question('Quel est le nombre ? ', (answer) => {

    // 6 - API Number.parseInt
    const entierSaisi = parseInt(answer);

    // 6 - API Number.isNaN
    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    this._rl.close();
  });
};

const jeu = new Jeu();
jeu.jouer();
