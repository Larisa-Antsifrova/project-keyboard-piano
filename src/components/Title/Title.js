import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = ({ tag, title }) => {
  switch (tag) {
    case 'h1':
      return title && <h1 className={styles.title}>{title}</h1>;
    case 'h2':
      return title && <h2 className={styles.title}>{title}</h2>;
    default:
      return null;
  }
};

Title.defaultProps = {
  tag: 'h1',
  title: '',
};

Title.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
};

export default Title;
