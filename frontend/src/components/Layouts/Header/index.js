import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const Header = () => (
  <header className={styles.appHeader}>
    <h1 className={styles.brand}><Link to="/">Readable</Link></h1>
  </header>
);

export default Header;
