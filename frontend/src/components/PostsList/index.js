import { connect } from 'react-redux';

import * as fromPosts from '../../redux/modules/posts';
import {
  makeGetPostsByCategory,
  getIsFetching,
  getErrorMessage,
  getShouldFetch,
} from '../../redux/selectors/posts';

import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category || 'all';
  const getPostsByCategory = makeGetPostsByCategory();
  return {
    posts: getPostsByCategory(state, category),
    isFetching: getIsFetching(state, category),
    errorMessage: getErrorMessage(state, category),
    shouldFetch: getShouldFetch(state, category),
    category,
  };
}

export default connect(
  mapStateToProps,
  { fetchAndHandlePosts: fromPosts.fetchAndHandlePosts,
    handleSort: fromPosts.handleSort },
)(Container);
