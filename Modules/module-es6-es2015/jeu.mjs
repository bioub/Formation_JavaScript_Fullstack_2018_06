import { getRandomIntInclusive } from './random';
import readline from 'readline';
import chalk from 'chalk';

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

    this._entierAlea = getRandomIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  jouer() {
    if (this._essais.length) {
      // 5 - Template String
      console.log(chalk.yellow(`Vous avez déjà joué : ${this._essais.join(' | ')}`));
    }

    this._rl.question(chalk.blue('Quel est le nombre ? '), (answer) => {

      // 6 - API Number.parseInt
      const entierSaisi = Number.parseInt(answer);

      // 6 - API Number.isNaN
      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un entier'));
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné'));
      this._rl.close();
    });
  }
}

export default Jeu;
