import PropTypes from 'prop-types';
import styles from './Keyboard.module.css';

const Keyboard = ({ children }) => {
  return <ul className={styles.keyboard}>{children}</ul>;
};

Keyboard.propTypes = {
  children: PropTypes.node,
};

export default Keyboard;
