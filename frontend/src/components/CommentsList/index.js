import { connect } from 'react-redux';

import { getIsCommentAddFormOpen } from '../../redux/selectors/posts';
import { getCommentsByPost, getIsFetching, getErrorMessage } from '../../redux/selectors/comments';
import {
  fetchAndHandleComments,
  saveNewComment,
  updateComment,
  toggleCommentAddForm,
  handleSort,
} from '../../redux/modules/comments';

import View from './View';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;
  return {
    comments: getCommentsByPost(state, postId),
    isCommentAddFormOpen: getIsCommentAddFormOpen(state, postId),
    isFetching: getIsFetching(state, postId),
    errorMessage: getErrorMessage(state, postId),
  };
};

export default connect(
  mapStateToProps,
  { fetchAndHandleComments, saveNewComment, updateComment, toggleCommentAddForm, handleSort },
)(View);
