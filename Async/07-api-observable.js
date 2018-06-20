const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delay);
    }, delay);
  });
}

const intervalInSec$ = interval(1000)
  .pipe(
    map((delay) => delay / 1000),
  );

intervalInSec$.subscribe((delay) => console.log(`${delay}s passed`));
