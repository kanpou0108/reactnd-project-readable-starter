import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaCommentingO, FaEdit,
  FaTimesCircle
} from 'react-icons/lib/fa';
import ConfirmModal from '../ConfirmModal';

import styles from './styles.css';

const PostFooter = (props) => {
  const onDelete = (event) => {
    event.preventDefault();
    props.openConfirmDeletePostModal();
    // props.disablePost(props.postId, props.category, props.comments);
  };
  const handleDelete = () => {
    props.disablePost(props.postId, props.category, props.comments);
    props.closeConfirmDeletePostModal();
    if (props.showBody) props.history.push('/');
  };
  return (
    <div className={styles.postFooter}>
      <span className={styles.comment}>
        <FaCommentingO />
        <span>{`Comments(${props.comments ? props.comments.length : '0'})`}</span>
      </span>
      <span className={styles.edit}>
        <FaEdit />
        <Link to={{
          pathname: `/posts/${props.postId}/edit`,
          state: { prevPath: props.location, prevMatch: props.match },
        }}
        >{'Edit'}
        </Link>
      </span>
      <span className={styles.delete}>
        <FaTimesCircle />
        <a href="" role="button" tabIndex="0" onClick={onDelete}>
          {'Delete'}
        </a>
      </span>
      <ConfirmModal
        message="Are you sure you want to delete this post?"
        isOpen={props.confirmDeletePostModalOpen}
        onConfirm={handleDelete}
        onClose={props.closeConfirmDeletePostModal}
      />
    </div>
  );
};

PostFooter.propTypes = {
  comments: T.array,
  postId: T.string.isRequired,
  category: T.string.isRequired,
  disablePost: T.func.isRequired,
  confirmDeletePostModalOpen: T.bool,
  openConfirmDeletePostModal: T.func,
  closeConfirmDeletePostModal: T.func,
  showBody: T.bool,
  match: T.object.isRequired,
  location: T.object.isRequired,
  history: T.object.isRequired,
};

export default PostFooter;
