import { keys } from './keys/keys-descr.js';

window.addEventListener('keydown', e => {
  console.log(e.code);
  keys.forEach(key => {
    if (key.code === e.code) {
      new Audio(key.url).play();
    }

    if (key.halftone.code === e.code) {
      new Audio(key.halftone.url).play();
    }
  });
});
