const keys = [
  {
    noteLA: 'DO',
    noteEN: 'C',
    code: 'KeyZ',
    url: './sounds/28.mp3',
    halftone: {
      noteLASharp: 'DO♯',
      noteENSharp: 'C♯',
      noteLAFlat: 'RE♭',
      noteENFlat: 'D♭',
      code: 'Digit4',
      url: './sounds/29.mp3'
    }
  },
  {
    noteLA: 'RE',
    noteEN: 'D',
    code: 'KeyX',
    url: './sounds/30.mp3',
    halftone: {
      noteLASharp: 'RE♯',
      noteENSharp: 'D♯',
      noteLAFlat: 'MI♭',
      noteENFlat: 'E♭',
      code: 'Digit5',
      url: './sounds/31.mp3'
    }
  },
  {
    noteLA: 'MI',
    noteEN: 'E',
    code: 'KeyC',
    url: './sounds/32.mp3',
    halftone: false
  },
  {
    noteLA: 'FA',
    noteEN: 'F',
    code: 'KeyV',
    url: './sounds/33.mp3',
    halftone: {
      noteLASharp: 'FA♯',
      noteENSharp: 'F♯',
      noteLAFlat: 'SOL♭',
      noteENFlat: 'G♭',
      code: 'KeyQ',
      url: './sounds/34.mp3'
    }
  },
  {
    noteLA: 'SOL',
    noteEN: 'G',
    code: 'KeyB',
    url: './sounds/35.mp3',
    halftone: {
      noteLASharp: 'SOL♯',
      noteENSharp: 'G♯',
      noteLAFlat: 'LA♭',
      noteENFlat: 'A♭',
      code: 'KeyW',
      url: './sounds/36.mp3'
    }
  },
  {
    noteLA: 'LA',
    noteEN: 'A',
    code: 'KeyA',
    url: './sounds/37.mp3',
    halftone: {
      noteLASharp: 'LA♯',
      noteENSharp: 'A♯',
      noteLAFlat: 'SI♭',
      noteENFlat: 'B♭',
      code: 'KeyE',
      url: './sounds/38.mp3'
    }
  },
  {
    noteLA: 'SI',
    noteEN: 'B',
    code: 'KeyS',
    url: './sounds/39.mp3',
    halftone: false
  },
  {
    noteLA: 'DO',
    noteEN: 'C',
    code: 'KeyD',
    url: './sounds/40.mp3',
    halftone: {
      noteLASharp: 'DO♯',
      noteENSharp: 'C♯',
      noteLAFlat: 'RE♭',
      noteENFlat: 'D♭',
      code: 'KeyR',
      url: './sounds/41.mp3'
    }
  },
  {
    noteLA: 'RE',
    noteEN: 'D',
    code: 'KeyF',
    url: './sounds/42.mp3',
    halftone: {
      noteLASharp: 'RE♯',
      noteENSharp: 'D♯',
      noteLAFlat: 'MI♭',
      noteENFlat: 'E♭',
      code: 'KeyT',
      url: './sounds/43.mp3'
    }
  },
  {
    noteLA: 'MI',
    noteEN: 'E',
    code: 'KeyG',
    url: './sounds/44.mp3',
    halftone: false
  },
  {
    noteLA: 'FA',
    noteEN: 'F',
    code: 'KeyH',
    url: './sounds/45.mp3',
    halftone: {
      noteLASharp: 'FA♯',
      noteENSharp: 'F♯',
      noteLAFlat: 'SOL♭',
      noteENFlat: 'G♭',
      code: 'KeyY',
      url: './sounds/46.mp3'
    }
  },
  {
    noteLA: 'SOL',
    noteEN: 'G',
    code: 'KeyJ',
    url: './sounds/47.mp3',
    halftone: {
      noteLASharp: 'SOL♯',
      noteENSharp: 'G♯',
      noteLAFlat: 'LA♭',
      noteENFlat: 'A♭',
      code: 'KeyU',
      url: './sounds/48.mp3'
    }
  },
  {
    noteLA: 'LA',
    noteEN: 'A',
    code: 'KeyK',
    url: './sounds/49.mp3',
    halftone: {
      noteLASharp: 'LA♯',
      noteENSharp: 'A♯',
      noteLAFlat: 'SI♭',
      noteENFlat: 'B♭',
      code: 'KeyI',
      url: './sounds/50.mp3'
    }
  },
  {
    noteLA: 'SI',
    noteEN: 'B',
    code: 'KeyL',
    url: './sounds/51.mp3',
    halftone: false
  },
  {
    noteLA: 'DO',
    noteEN: 'C',
    code: 'Semicolon',
    url: './sounds/52.mp3',
    halftone: {
      noteLASharp: 'DO♯',
      noteENSharp: 'C♯',
      noteLAFlat: 'RE♭',
      noteENFlat: 'D♭',
      code: 'KeyO',
      url: './sounds/53.mp3'
    }
  },
  {
    noteLA: 'RE',
    noteEN: 'D',
    code: 'Quote',
    url: './sounds/54.mp3',
    halftone: {
      noteLASharp: 'RE♯',
      noteENSharp: 'D♯',
      noteLAFlat: 'MI♭',
      noteENFlat: 'E♭',
      code: 'KeyP',
      url: './sounds/55.mp3'
    }
  },
  {
    noteLA: 'MI',
    noteEN: 'E',
    code: 'KeyN',
    url: './sounds/56.mp3',
    halftone: false
  },
  {
    noteLA: 'FA',
    noteEN: 'F',
    code: 'KeyM',
    url: './sounds/57.mp3',
    halftone: {
      noteLASharp: 'FA♯',
      noteENSharp: 'F♯',
      noteLAFlat: 'SOL♭',
      noteENFlat: 'G♭',
      code: 'BracketLeft',
      url: './sounds/58.mp3'
    }
  },
  {
    noteLA: 'SOL',
    noteEN: 'G',
    code: 'Comma',
    url: './sounds/59.mp3',
    halftone: {
      noteLASharp: 'SOL♯',
      noteENSharp: 'G♯',
      noteLAFlat: 'LA♭',
      noteENFlat: 'A♭',
      code: 'BracketRight',
      url: './sounds/60.mp3'
    }
  },
  {
    noteLA: 'LA',
    noteEN: 'A',
    code: 'Period',
    url: './sounds/61.mp3',
    halftone: {
      noteLASharp: 'LA♯',
      noteENSharp: 'A♯',
      noteLAFlat: 'SI♭',
      noteENFlat: 'B♭',
      code: 'Backslash',
      url: './sounds/62.mp3'
    }
  },
  {
    noteLA: 'SI',
    noteEN: 'B',
    code: 'Slash',
    url: './sounds/63.mp3',
    halftone: false
  }
];

export { keys };
