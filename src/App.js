import React, { useEffect } from 'react';
import Container from './components/Container/Container';
import { soundifyKeyboard } from './helpers/soundify-keyboard';

function App() {
  useEffect(() => {
    window.addEventListener('keydown', soundifyKeyboard);

    return () => {
      window.removeEventListener('keydown', soundifyKeyboard);
    };
  });

  return (
    <Container>
      <h1>Here comes my Piano App!</h1>
    </Container>
  );
}

export default App;
