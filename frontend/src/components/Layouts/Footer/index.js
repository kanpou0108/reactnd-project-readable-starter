import React from 'react';
import { FaGithub } from 'react-icons/lib/fa';

import styles from './styles.css';

const Footer = () => (
  <footer className={styles.appFooter}>
    <span>Readable Project - Udacity React NanoDegree course<br />
      © 2017 Jan Vigar All Rights Reserved<br />
      <a href="https://github.com/jansvigar/reactnd-project-readable"><FaGithub /></a>
    </span>
  </footer>
);

export default Footer;
