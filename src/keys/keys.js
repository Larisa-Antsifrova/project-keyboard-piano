import KeyZ from '../sounds/28.mp3';
import Digit4 from '../sounds/29.mp3';
import KeyX from '../sounds/30.mp3';
import Digit5 from '../sounds/31.mp3';
import KeyC from '../sounds/32.mp3';
import KeyV from '../sounds/33.mp3';
import KeyQ from '../sounds/34.mp3';
import KeyB from '../sounds/35.mp3';
import KeyW from '../sounds/36.mp3';
import KeyA from '../sounds/37.mp3';
import KeyE from '../sounds/38.mp3';
import KeyS from '../sounds/39.mp3';
import KeyD from '../sounds/40.mp3';
import KeyR from '../sounds/41.mp3';
import KeyF from '../sounds/42.mp3';
import KeyT from '../sounds/43.mp3';
import KeyG from '../sounds/44.mp3';
import KeyH from '../sounds/45.mp3';
import KeyY from '../sounds/46.mp3';
import KeyJ from '../sounds/47.mp3';
import KeyU from '../sounds/48.mp3';
import KeyK from '../sounds/49.mp3';
import KeyI from '../sounds/50.mp3';
import KeyL from '../sounds/51.mp3';
import Semicolon from '../sounds/52.mp3';
import KeyO from '../sounds/53.mp3';
import Quote from '../sounds/54.mp3';
import KeyP from '../sounds/55.mp3';
import KeyN from '../sounds/56.mp3';
import KeyM from '../sounds/57.mp3';
import BracketLeft from '../sounds/58.mp3';
import Comma from '../sounds/59.mp3';
import BracketRight from '../sounds/60.mp3';
import Period from '../sounds/61.mp3';
import Backslash from '../sounds/62.mp3';
import Slash from '../sounds/63.mp3';

const keys = [
  {
    noteLA: 'DO',
    noteEN: 'C',
    code: 'KeyZ',
    url: KeyZ,
    halftone: {
      noteLASharp: 'DO♯',
      noteENSharp: 'C♯',
      noteLAFlat: 'RE♭',
      noteENFlat: 'D♭',
      code: 'Digit4',
      url: Digit4,
    },
  },
  {
    noteLA: 'RE',
    noteEN: 'D',
    code: 'KeyX',
    url: KeyX,
    halftone: {
      noteLASharp: 'RE♯',
      noteENSharp: 'D♯',
      noteLAFlat: 'MI♭',
      noteENFlat: 'E♭',
      code: 'Digit5',
      url: Digit5,
    },
  },
  {
    noteLA: 'MI',
    noteEN: 'E',
    code: 'KeyC',
    url: KeyC,
    halftone: false,
  },
  {
    noteLA: 'FA',
    noteEN: 'F',
    code: 'KeyV',
    url: KeyV,
    halftone: {
      noteLASharp: 'FA♯',
      noteENSharp: 'F♯',
      noteLAFlat: 'SOL♭',
      noteENFlat: 'G♭',
      code: 'KeyQ',
      url: KeyQ,
    },
  },
  {
    noteLA: 'SOL',
    noteEN: 'G',
    code: 'KeyB',
    url: KeyB,
    halftone: {
      noteLASharp: 'SOL♯',
      noteENSharp: 'G♯',
      noteLAFlat: 'LA♭',
      noteENFlat: 'A♭',
      code: 'KeyW',
      url: KeyW,
    },
  },
  {
    noteLA: 'LA',
    noteEN: 'A',
    code: 'KeyA',
    url: KeyA,
    halftone: {
      noteLASharp: 'LA♯',
      noteENSharp: 'A♯',
      noteLAFlat: 'SI♭',
      noteENFlat: 'B♭',
      code: 'KeyE',
      url: KeyE,
    },
  },
  {
    noteLA: 'SI',
    noteEN: 'B',
    code: 'KeyS',
    url: KeyS,
    halftone: false,
  },
  {
    noteLA: 'DO',
    noteEN: 'C',
    code: 'KeyD',
    url: KeyD,
    halftone: {
      noteLASharp: 'DO♯',
      noteENSharp: 'C♯',
      noteLAFlat: 'RE♭',
      noteENFlat: 'D♭',
      code: 'KeyR',
      url: KeyR,
    },
  },
  {
    noteLA: 'RE',
    noteEN: 'D',
    code: 'KeyF',
    url: KeyF,
    halftone: {
      noteLASharp: 'RE♯',
      noteENSharp: 'D♯',
      noteLAFlat: 'MI♭',
      noteENFlat: 'E♭',
      code: 'KeyT',
      url: KeyT,
    },
  },
  {
    noteLA: 'MI',
    noteEN: 'E',
    code: 'KeyG',
    url: KeyG,
    halftone: false,
  },
  {
    noteLA: 'FA',
    noteEN: 'F',
    code: 'KeyH',
    url: KeyH,
    halftone: {
      noteLASharp: 'FA♯',
      noteENSharp: 'F♯',
      noteLAFlat: 'SOL♭',
      noteENFlat: 'G♭',
      code: 'KeyY',
      url: KeyY,
    },
  },
  {
    noteLA: 'SOL',
    noteEN: 'G',
    code: 'KeyJ',
    url: KeyJ,
    halftone: {
      noteLASharp: 'SOL♯',
      noteENSharp: 'G♯',
      noteLAFlat: 'LA♭',
      noteENFlat: 'A♭',
      code: 'KeyU',
      url: KeyU,
    },
  },
  {
    noteLA: 'LA',
    noteEN: 'A',
    code: 'KeyK',
    url: KeyK,
    halftone: {
      noteLASharp: 'LA♯',
      noteENSharp: 'A♯',
      noteLAFlat: 'SI♭',
      noteENFlat: 'B♭',
      code: 'KeyI',
      url: KeyI,
    },
  },
  {
    noteLA: 'SI',
    noteEN: 'B',
    code: 'KeyL',
    url: KeyL,
    halftone: false,
  },
  {
    noteLA: 'DO',
    noteEN: 'C',
    code: 'Semicolon',
    url: Semicolon,
    halftone: {
      noteLASharp: 'DO♯',
      noteENSharp: 'C♯',
      noteLAFlat: 'RE♭',
      noteENFlat: 'D♭',
      code: 'KeyO',
      url: KeyO,
    },
  },
  {
    noteLA: 'RE',
    noteEN: 'D',
    code: 'Quote',
    url: Quote,
    halftone: {
      noteLASharp: 'RE♯',
      noteENSharp: 'D♯',
      noteLAFlat: 'MI♭',
      noteENFlat: 'E♭',
      code: 'KeyP',
      url: KeyP,
    },
  },
  {
    noteLA: 'MI',
    noteEN: 'E',
    code: 'KeyN',
    url: KeyN,
    halftone: false,
  },
  {
    noteLA: 'FA',
    noteEN: 'F',
    code: 'KeyM',
    url: KeyM,
    halftone: {
      noteLASharp: 'FA♯',
      noteENSharp: 'F♯',
      noteLAFlat: 'SOL♭',
      noteENFlat: 'G♭',
      code: 'BracketLeft',
      url: BracketLeft,
    },
  },
  {
    noteLA: 'SOL',
    noteEN: 'G',
    code: 'Comma',
    url: Comma,
    halftone: {
      noteLASharp: 'SOL♯',
      noteENSharp: 'G♯',
      noteLAFlat: 'LA♭',
      noteENFlat: 'A♭',
      code: 'BracketRight',
      url: BracketRight,
    },
  },
  {
    noteLA: 'LA',
    noteEN: 'A',
    code: 'Period',
    url: Period,
    halftone: {
      noteLASharp: 'LA♯',
      noteENSharp: 'A♯',
      noteLAFlat: 'SI♭',
      noteENFlat: 'B♭',
      code: 'Backslash',
      url: Backslash,
    },
  },
  {
    noteLA: 'SI',
    noteEN: 'B',
    code: 'Slash',
    url: Slash,
    halftone: false,
  },
];

export { keys };
