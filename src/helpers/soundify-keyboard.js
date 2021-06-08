import { keys } from '../keys/keys';

function soundifyKeyboard(e) {
  keys.forEach(key => {
    if (key.code === e.code) {
      new Audio(key.url).play();
    }
    if (key.halftone.code === e.code) {
      new Audio(key.halftone.url).play();
    }
  });
}

export { soundifyKeyboard };
