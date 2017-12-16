import React, { Component } from 'react';
import T from 'prop-types';

import Comment from '../Comment';
import CommentForm from '../CommentForm';
import SortList from '../SortList';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

import styles from './styles.css';

class CommentsList extends Component {
  componentDidMount() {
    if (this.props.comments.length === 0) {
      this.props.fetchAndHandleComments(this.props.postId);
    }
  }
  onRetry = () => {
    this.props.fetchAndHandleComments(this.props.postId);
  }
  toggleCommentAddForm = () => {
    const postId = this.props.postId;
    this.props.toggleCommentAddForm(postId);
  }

  render() {
    return (
      <div>
        <div className={styles.commentsListHeader}>
          <h3>Comments</h3>
          <button className={styles.btnAddNewComment} onClick={this.toggleCommentAddForm}>Add New Comment</button>
        </div>
        {this.props.isCommentAddFormOpen &&
          <CommentForm
            postId={this.props.postId}
            onSaveComment={this.props.saveNewComment}
            onUpdateComment={this.props.updateComment}
            onToggleCommentAdd={this.toggleCommentAddForm}
          />}
        <SortList
          items={this.props.comments}
          handleSort={this.props.handleSort}
          parentId={this.props.postId}
        />
        <div className={styles.commentsList}>
          {this.props.isFetching && <Spinner />}

          {
            !this.props.isFetching && !this.props.errorMessage && (this.props.comments.length > 0
              ? this.props.comments.map(comment => comment && (
                <Comment
                  key={comment.id}
                  comment={comment}
                />
              ))
              : <div>{'There is no comment for this post yet'}</div>)
          }

          {this.props.errorMessage
            && <ErrorMessage error={this.props.errorMessage} onRetry={this.onRetry} />}
        </div>
      </div>
    );
  }
}

CommentsList.propTypes = {
  comments: T.array.isRequired,
  fetchAndHandleComments: T.func.isRequired,
  saveNewComment: T.func.isRequired,
  updateComment: T.func.isRequired,
  isCommentAddFormOpen: T.bool,
  toggleCommentAddForm: T.func.isRequired,
  postId: T.string.isRequired,
  handleSort: T.func,
  isFetching: T.bool.isRequired,
  errorMessage: T.string,
};

export default CommentsList;