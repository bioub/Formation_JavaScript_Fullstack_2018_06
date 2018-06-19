// en js on manipule souvent des objets
// existants

// définis au niveau Langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// définis au niveau Node.js
console.log(typeof process); // object
console.log(typeof module); // object
console.log(typeof exports); // object
console.log(typeof global); // object

// définis au niveau Navigateur
console.log(typeof document); // object
console.log(typeof navigator); // object
console.log(typeof window); // object

// l'objet est dictionnaire (système clé/valeur)
// les objets sont extensibles
console.log(Math.sum); // undefined

// ajouter des clés/valeurs
// ! : mauvaise idée d'étendre les objets standards
Math.sum = (a, b) => a + b;

// modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum(1, 2)); // 3

// supprimer des clés/valeurs
delete Math.sum;

// si besoin de créer des objets, 3 cas possibles

// 1 - object literal
// objet mono instance
// ou très simple à créer
// pas besoin de type autre que Object

const myMath = {
  sum: (a, b) => a + b,
};

const coords = {
  x: 10,
  y: 20,
};

// type Object
console.log(coords instanceof Object); // true

// JSON : sérialisation d'un objet / conversion : Object <-> String
const json = JSON.stringify(coords);

// .... réseau ...
const coordsFromServer = JSON.parse(json);
console.log(coordsFromServer.x); // 10

// Boucler sur les clés d'un objet
for (var key in coords) {
  console.log(key); // x, y
  const value = coords[key];
  console.log(value); // 10, 20
}

// 2 opérateurs pour accéder aux valeurs
// .
console.log(coords.x); // 10
// []
console['log'](coords['x']); // 10

// 2 - factory function
// objet multi-instance
// complexe à créer
// pas besoin de type autre que Object
// pas de méthodes

function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
    getX: function() { return this.x; },
  };
}


const coords3dA = coords3dFactory(10, 20);
console.log(coords3dA.x); // 10
console.log(coords3dA.getX()); // 10

const coords3dB = coords3dFactory();
console.log(coords3dB.x); // 0
console.log(coords3dB.getX()); // 0

console.log(coords3dA.getX === coords3dB.getX); // false (la fonction est dupliquée)

// 3 - constructor function
// objet multi-instance
// complexe à créer
// avec un type autre que Object
// avec des méthodes

function Coords(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Coords.getClass = function () { return 'Coords'; };
Coords.prototype.getX = function () { return this.x; };

const coords3d1 = new Coords(10, 20);
console.log(typeof coords3d1); // object
console.log(coords3d1.x); // 10
console.log(coords3d1.getX()); // 10
console.log(coords3d1.hasOwnProperty('x')); // true
console.log(coords3d1.hasOwnProperty('getX')); // false

const coords3d2 = new Coords();
console.log(coords3d2.x); // 0
console.log(coords3d2.getX()); // 0

// méthode de classe / méthode statique
console.log(Coords.getClass());


console.log(coords3d1.getX === coords3d2.getX); // true

