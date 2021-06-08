import React, { useEffect } from 'react';
import { soundifyKeyboard } from './helpers/soundify-keyboard';

function App() {
  useEffect(() => {
    window.addEventListener('keydown', soundifyKeyboard);

    return () => {
      window.removeEventListener('keydown', soundifyKeyboard);
    };
  });

  return (
    <div>
      <h1>Here comes my Piano App!</h1>
    </div>
  );
}

export default App;
