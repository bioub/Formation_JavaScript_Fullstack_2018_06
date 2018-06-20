const random = {
  // 1 - Method properties
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

// 2 - class
class Jeu {
  /**
   * @param {object} options
   * @param {number} options.min La borne min (default 0)
   * @param {number} options.max La borne max (default 100)
   */
  constructor(options = {}) {
    // 3 - Default value
    // options = options || {};

    // 4 - Destructurer avec default value (page 125)
    //const min = options.min || 0;
    //const max = options.max !== undefined ? options.max : 100;
    const { min = 0, max = 100 } = options;

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  jouer() {
    if (this._essais.length) {
      // 5 - Template String
      console.log(`Vous avez déjà joué : ${this._essais.join(' | ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      // 6 - API Number.parseInt
      const entierSaisi = Number.parseInt(answer);

      // 6 - API Number.isNaN
      if (Number.isNaN(entierSaisi)) {
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
  }
}


const jeu = new Jeu();
jeu.jouer();
