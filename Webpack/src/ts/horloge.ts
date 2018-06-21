import { getRandomIntInclusive } from "./random";
import { format } from 'date-fns';

class Horloge {

  constructor(private _container: HTMLElement) {}

  _render() {
    const now = new Date();
    // this._container.innerText = now.toLocaleTimeString();
    this._container.innerText = format(now, 'HH:mm:ss');
    console.log(getRandomIntInclusive(0, 100));
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}

export { Horloge };

