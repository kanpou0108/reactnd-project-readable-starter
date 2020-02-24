import { connect } from 'react-redux';

import * as fromCategories from '../../redux/modules/categories';
import * as categoriesSelectors from '../../redux/selectors/categories';

import Container from './Container';

const mapStateToProps = (state) => ({
  categories: categoriesSelectors.getCategories(state),
  isFetching: categoriesSelectors.getIsFetching(state),
  errorMessage: categoriesSelectors.getErrorMessage(state),
});

export default connect(
  mapStateToProps,
  { fetchAndHandleCategories: fromCategories.fetchAndHandleCategories },
)(Container);
