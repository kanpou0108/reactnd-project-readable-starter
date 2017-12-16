import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from '../Comment';
import CommentForm from '../CommentForm';
import SortList from '../SortList';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import { getIsCommentAddFormOpen } from '../../redux/selectors/posts';
import { getCommentsByPost, getIsFetching, getErrorMessage } from '../../redux/selectors/comments';
import {
  fetchAndHandleComments,
  saveNewComment,
  updateComment,
  toggleCommentAddForm,
  handleSort,
} from '../../redux/modules/comments';

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
  comments: PropTypes.array.isRequired,
  fetchAndHandleComments: PropTypes.func.isRequired,
  saveNewComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  isCommentAddFormOpen: PropTypes.bool,
  toggleCommentAddForm: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  handleSort: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const postId = ownProps.postId;
  return {
    comments: getCommentsByPost(state, postId),
    isCommentAddFormOpen: getIsCommentAddFormOpen(state, postId),
    isFetching: getIsFetching(state, postId),
    errorMessage: getErrorMessage(state, postId),
  };
}

export default connect(
  mapStateToProps,
  { fetchAndHandleComments, saveNewComment, updateComment, toggleCommentAddForm, handleSort },
)(CommentsList);
