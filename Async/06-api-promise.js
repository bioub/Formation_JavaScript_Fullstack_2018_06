function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
}

function randomTimeout() {
  return timeout(Math.floor(Math.random() * 1001));
}

/*
Promise.all([
  randomTimeout(),
  randomTimeout(),
])
  .then(([delayA, delayB]) => {
    console.log(`A - ${delayA}ms passed`);
    console.log(`B - ${delayB}ms passed`);
  });
*/

async function randomTimeoutTwice() {
  const [delayA, delayB] = await Promise.all([
    randomTimeout(),
    randomTimeout(),
  ]);

  console.log(`A - ${delayA}ms passed`);
  console.log(`B - ${delayB}ms passed`);
}

(async () => {
  await randomTimeoutTwice();
  console.log('Fin');
})();
