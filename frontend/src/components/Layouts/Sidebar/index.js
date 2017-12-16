import React from 'react';
import T from 'prop-types';

import styles from './styles.css';

const Sidebar = props => (
  <div className={styles.sidebar}>
    {props.children}
  </div>
);

Sidebar.propTypes = {
  children: T.element,
};

export default Sidebar;
