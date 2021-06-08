import React, { useEffect } from 'react';
import Container from './components/Container/Container';
import Title from './components/Title/Title';
import Keyboard from './components/Keyboard/Keyboard';
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
      <Title title="Here comes my Piano App!" />
      <Keyboard />
    </Container>
  );
}

export default App;
