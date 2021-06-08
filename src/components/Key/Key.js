import PropTypes from 'prop-types';
import styles from './Key.module.css';

const Key = ({ boardKey }) => {
  return (
    <li className={styles.whiteKey}>
      <span>{boardKey.noteLA}</span>
      {boardKey.halftone && (
        <div className={styles.blackKey}>
          <span>{boardKey.halftone.noteLASharp}</span>
          <span>{boardKey.halftone.noteLAFlat}</span>
        </div>
      )}
    </li>
  );
};

Key.propTypes = {
  boardKey: PropTypes.shape({
    noteLA: PropTypes.string.isRequired,
    noteEN: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    halftone: PropTypes.oneOfType([
      PropTypes.shape({
        noteLASharp: PropTypes.string.isRequired,
        noteENSharp: PropTypes.string.isRequired,
        noteLAFlat: PropTypes.string.isRequired,
        noteENFlat: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      PropTypes.bool,
    ]).isRequired,
  }),
};

export default Key;
