import React from 'react';
import T from 'prop-types';
import { NavLink } from 'react-router-dom';
import { capitalize } from '../../utils/helpers';

const Category = ({ name, path }) => (
  <NavLink activeClassName="active" to={`/${path}`}>
    {capitalize(name)}
  </NavLink>
);

Category.propTypes = {
  name: T.string.isRequired,
  path: T.string.isRequired,
};

export default Category;
