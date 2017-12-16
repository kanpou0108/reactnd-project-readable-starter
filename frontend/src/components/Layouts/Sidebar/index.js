import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Sidebar = props => (
  <div className={styles.sidebar}>
    {props.children}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.element,
};

export default Sidebar;
