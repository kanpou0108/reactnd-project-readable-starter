import React, { Component } from 'react';
import T from 'prop-types';

import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';

import View from './View';

class PostsListContainer extends Component {
  static propTypes = {
    posts: T.arrayOf(T.object).isRequired,
    fetchAndHandlePosts: T.func.isRequired,
    isFetching: T.bool.isRequired,
    errorMessage: T.string,
    category: T.string.isRequired,
    handleSort: T.func.isRequired,
    shouldFetch: T.bool.isRequired,
    match: T.object,
    location: T.object,
  }

  componentDidMount() {
    if (this.props.posts.length === 0 || this.props.shouldFetch) {
      this.props.fetchAndHandlePosts(this.props.category);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category &&
      (this.props.shouldFetch || this.props.posts.length === 0)) {
      this.props.fetchAndHandlePosts(this.props.category);
    }
  }

  onRetry = () => {
    this.props.fetchAndHandlePosts(this.props.category);
  }

  render() {
    const { posts, category,
      handleSort, isFetching, errorMessage,
      match, location } = this.props;
    return (
      <div>
        {isFetching && !errorMessage
          ? <Spinner />
          : <View
            posts={posts}
            category={category}
            handleSort={handleSort}
            match={match}
            location={location}
          />
        }
        {errorMessage &&
          <ErrorMessage
            error={errorMessage}
            onRetry={this.onRetry}
          />}
      </div>
    );
  }
}

export default PostsListContainer;
