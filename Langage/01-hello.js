// // @ts-check

/**
 * Additionne 2 params
 * @param {number} a Le 1er nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

/**
 *
 * @param {string} name
 */
const hello = (name) => `Hello ${name.toUpperCase()} !`;


for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
