import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import ErrorMessage from '../components/ErrorMessage';
import * as fromCategories from '../redux/modules/categories';
import * as categoriesSelectors from '../redux/selectors/categories';
import Spinner from '../components/Spinner';

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

export default connect(
  state => ({
    categories: categoriesSelectors.getCategories(state),
    isFetching: categoriesSelectors.getIsFetching(state),
    errorMessage: categoriesSelectors.getErrorMessage(state),
  }),
  { fetchAndHandleCategories: fromCategories.fetchAndHandleCategories },
)(CategoriesListContainer);
