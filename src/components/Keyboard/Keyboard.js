import Key from '../Key/Key';
import { keys } from '../../keys/keys';
import styles from './Keyboard.module.css';

const Keyboard = () => {
  return (
    <ul className={styles.keyboard}>
      {keys.map(key => (
        <Key key={key.code} boardKey={key} />
      ))}
    </ul>
  );
};

export default Keyboard;
