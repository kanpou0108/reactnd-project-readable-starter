import React from 'react';
import T from 'prop-types';
import { FaThList } from 'react-icons/lib/fa';
import Category from '../Category';

import styles from './styles.css';

const CategoriesList = ({ categories }) => (
  <div>
    <nav className={styles.nav}>
      <span className={styles.navHeader}>
        <FaThList /> Categories
      </span>
      { categories.map(category => (
        <Category key={category.name} {...category} />
      ))}
    </nav>
  </div>
);

CategoriesList.propTypes = {
  categories: T.arrayOf(T.object).isRequired,
};

export default CategoriesList;
