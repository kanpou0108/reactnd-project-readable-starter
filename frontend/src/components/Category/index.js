import React from 'react';
import T from 'prop-types';
import { NavLink } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';
import { ReactSVG, ReduxSVG, UdacitySVG } from './icons'

import styles from './styles.css';

const Logos = {
  'react' : <ReactSVG/>,
  'redux' : <ReduxSVG/>,
  'udacity' : <UdacitySVG/>,
}

const Category = ({ name, path }) => (
  <NavLink activeClassName="active" to={`/${path}`}>
    <div className={styles.category}>
      <div className={styles.text}>
        {capitalize(name)}
      </div>
      {Logos[path]}
    </div>
  </NavLink>
);

Category.propTypes = {
  name: T.string.isRequired,
  path: T.string.isRequired,
};

export default Category;
