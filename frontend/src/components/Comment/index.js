import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import {
  FaEdit,
  FaTimesCircle,
  FaUser } from 'react-icons/lib/fa';
import CommentVoteScore from '../../containers/CommentVoteScore';
import CommentForm from '../CommentForm';
import ConfirmModal from '../ConfirmModal';
import * as fromComments from '../../redux/modules/comments';
import * as commentsSelector from '../../redux/selectors/comments';
import * as uiSelector from '../../redux/selectors/ui';
import * as fromModal from '../../redux/modules/modal';
import { convertUnixTimestampToDate } from '../../utils/helpers';

import styles from './styles.css';

const Comment = (props) => {
  const toggleCommentEdit = (event) => {
    if (event) { event.preventDefault(); }
    props.toggleCommentEditForm(props.comment.id);
  };
  const handleDeleteClick = (event) => {
    if (event) { event.preventDefault(); }
    props.openConfirmDeleteCommentModal();
  };
  const onConfirm = () => {
    props.disableComment(props.comment.id, props.comment.parentId);
    props.closeConfirmDeleteCommentModal();
  };
  return (
    <div className={styles.comment}>
      <CommentVoteScore commentId={props.comment.id} />
      {props.isCommentEditFormOpen
        ? (<div className={styles.commentContent}>
          <CommentForm
            commentId={props.comment.id}
            initialValues={props.comment}
            onUpdateComment={props.updateComment}
            onToggleCommentEdit={toggleCommentEdit}
          /></div>)
        : (
          <div className={styles.commentContent}>
            <div className={styles.commentHeader}>
              <FaUser />{` ${props.comment.author} commented on ${convertUnixTimestampToDate(props.comment.timestamp)}`}
            </div>
            <div className={styles.commentBody}>{props.comment.body}</div>
            <div className={styles.commentFooter}>
              <span className={styles.commentEditLink}><FaEdit /><a role="button" tabIndex="0" onClick={toggleCommentEdit}>{'Edit'}</a></span>
              <span className={styles.commentDeleteLink}><FaTimesCircle /><a href="" role="button" tabIndex="0" onClick={handleDeleteClick}>{'Delete'}</a></span>
            </div>
          </div>
        )}
      <ConfirmModal
        message="Are you sure you want to delete this comment?"
        isOpen={props.confirmDeleteCommentModalOpen}
        onConfirm={onConfirm}
        onClose={props.closeConfirmDeleteCommentModal}
      />
    </div>

  );
};

Comment.propTypes = {
  comment: T.object.isRequired,
  updateComment: T.func.isRequired,
  disableComment: T.func.isRequired,
  isCommentEditFormOpen: T.bool,
  toggleCommentEditForm: T.func,
  confirmDeleteCommentModalOpen: T.bool.isRequired,
  openConfirmDeleteCommentModal: T.func.isRequired,
  closeConfirmDeleteCommentModal: T.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isCommentEditFormOpen: commentsSelector.getIsCommentEditFormOpen(state, ownProps.comment.id),
  confirmDeleteCommentModalOpen: uiSelector.getConfirmDeleteCommentModalOpen(state),
});

export default connect(
  mapStateToProps,
  { toggleCommentEditForm: fromComments.toggleCommentEditForm,
    updateComment: fromComments.updateComment,
    disableComment: fromComments.disableComment,
    openConfirmDeleteCommentModal: fromModal.openConfirmDeleteCommentModal,
    closeConfirmDeleteCommentModal: fromModal.closeConfirmDeleteCommentModal },
)(Comment);
