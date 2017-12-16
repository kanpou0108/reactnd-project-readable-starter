import React from 'react';
import { FaSpinner } from 'react-icons/lib/fa/';

import styles from './styles.css';

const Spinner = () => (
  <div>
    <FaSpinner className={styles.spinner} />
  </div>
);

export default Spinner;
