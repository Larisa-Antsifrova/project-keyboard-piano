import React, { useEffect, useState } from 'react';
import Container from './components/Container/Container';
import Title from './components/Title/Title';
import Keyboard from './components/Keyboard/Keyboard';
import { soundifyKeyboard } from './helpers/soundify-keyboard';

function App() {
  const [keyCode, setKeyCode] = useState([]);

  const onKeyUp = e => {
    setKeyCode(prevState => prevState.filter(key => key !== e.code));
  };

  useEffect(() => {
    const onKeyDown = e => {
      setKeyCode(prevState => {
        if (prevState.includes(e.code)) {
          return prevState;
        }
        return [...prevState, e.code];
      });
      soundifyKeyboard(e, keyCode);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [keyCode]);

  return (
    <Container>
      <Title title="Here comes my Piano App!" />
      <Keyboard currentKeys={keyCode} />
    </Container>
  );
}

export default App;
