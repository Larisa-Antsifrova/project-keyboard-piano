import React, { useEffect, useState } from 'react';
import Container from './components/Container/Container';
import Title from './components/Title/Title';
import Keyboard from './components/Keyboard/Keyboard';
import { soundifyKeyboard } from './helpers/soundify-keyboard';

function App() {
  const [keyCode, setKeyCode] = useState([]);

  const onKeyDown = e => {
    setKeyCode(prevState => [...prevState, e.code]);
    soundifyKeyboard(e);
  };

  const onKeyUp = e => {
    setKeyCode(prevState => prevState.filter(key => key !== e.code));
  };

  useEffect(() => {
    document.addEventListener('keypress', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keypress', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <Container>
      <Title title="Here comes my Piano App!" />
      <Keyboard />
    </Container>
  );
}

export default App;
