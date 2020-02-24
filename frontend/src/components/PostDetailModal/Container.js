import React, { Component } from 'react';
import T from 'prop-types';

import Modal from '../Modal';
import Post from '../Post';
import CommentsList from '../CommentsList';
import { redirectToReferrerOrHome } from '../../utils/helpers';

class PostDetailModal extends Component {
  componentDidMount() {
    this.props.openPostModal();
  }
  handleCloseModal = () => {
    this.props.closePostModal();
    redirectToReferrerOrHome(this.props.location.state, this.props.history);
  }

  render() {
    return (
      <div>
        <Modal
          contentLabel="Post Detail Modal"
          closeModal={this.handleCloseModal}
          isOpen={this.props.postModalOpen}
        >
          <div>
            {this.props.post ? (
              <div>
                <Post {...this.props.post} showBody />
                <CommentsList postId={this.props.post.id} />
              </div>
            ) : <div>{!this.props.isFetching
              ? 'The post is not found. It may have been removed or moved to a different category'
              : 'Loading Post...' }</div>}
          </div>
        </Modal>
      </div>
    );
  }
}

PostDetailModal.propTypes = {
  openPostModal: T.func.isRequired,
  closePostModal: T.func.isRequired,
  postModalOpen: T.bool.isRequired,
  location: T.object.isRequired,
  history: T.object.isRequired,
  post: T.object,
  isFetching: T.bool,
};

export default PostDetailModal;

