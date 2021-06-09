import PropTypes from 'prop-types';
import styles from './Key.module.css';

const Key = ({ boardKey, currentKeys }) => {
  return (
    <li
      className={
        currentKeys.includes(boardKey.code)
          ? styles.whiteKeyPressed
          : styles.whiteKey
      }
    >
      <p className={styles.keyCaption}>{boardKey.noteLA}</p>
      {boardKey.halftone && (
        <div
          className={
            currentKeys.includes(boardKey.halftone.code)
              ? styles.blackKeyPressed
              : styles.blackKey
          }
        >
          <div className={styles.blackKeyGroup}>
            <p className={styles.keyCaption}>{boardKey.halftone.noteLASharp}</p>
            <p className={styles.keyCaption}>{boardKey.halftone.noteLAFlat}</p>
          </div>
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
