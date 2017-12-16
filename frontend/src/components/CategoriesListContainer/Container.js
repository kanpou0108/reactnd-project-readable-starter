import React, { Component } from 'react';
import T from 'prop-types';

import CategoriesList from '../CategoriesList';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

class CategoriesListContainer extends Component {
  static propTypes = {
    categories: T.arrayOf(T.object).isRequired,
    fetchAndHandleCategories: T.func.isRequired,
    isFetching: T.bool.isRequired,
    errorMessage: T.string,
  }

  componentDidMount() {
    this.props.fetchAndHandleCategories();
  }

  onRetry = () => {
    this.props.fetchAndHandleCategories();
  }

  render() {
    const { categories, isFetching, errorMessage } = this.props;
    return (
      <div>
        {isFetching && !errorMessage
          ? <Spinner />
          : <CategoriesList categories={categories} />
        }
        {errorMessage && <ErrorMessage error={errorMessage} onRetry={this.onRetry} />}
      </div>
    );
  }
}

export default CategoriesListContainer;