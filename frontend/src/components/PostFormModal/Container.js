import React, { Component } from 'react';
import T from 'prop-types';

import { v4 } from 'uuid';
import Modal from '../Modal';
import PostForm from '../PostForm';
import { redirectToReferrerOrHome } from '../../utils/helpers';

class PostFormModal extends Component {
  componentDidMount() {
    this.props.openPostModal();
  }

  onSavePost = (values) => {
    const newPostData = {
      id: v4(),
      timestamp: Date.now(),
      ...values,
    };
    this.props.saveNewPost(newPostData);
    redirectToReferrerOrHome(this.props.location.state, this.props.history);
  }

  onUpdatePost = (values) => {
    const initialCategory = this.props.initialFormValues.category;
    this.props.updatePost(values, initialCategory);
    redirectToReferrerOrHome(this.props.location.state, this.props.history);
  }

  handleCloseModal = () => {
    this.props.closePostModal();
    redirectToReferrerOrHome(this.props.location.state, this.props.history);
  }

  render() {
    return (
      <div>
        <Modal
          contentLabel="Post Modal"
          closeModal={this.handleCloseModal}
          isOpen={this.props.postModalOpen}
        >
          <PostForm
            onSavePost={this.onSavePost}
            onUpdatePost={this.onUpdatePost}
            initialValues={this.props.initialFormValues}
            match={this.props.match}
          />
        </Modal>
      </div>
    );
  }
}

PostFormModal.propTypes = {
  openPostModal: T.func.isRequired,
  closePostModal: T.func.isRequired,
  postModalOpen: T.bool.isRequired,
  history: T.object.isRequired,
  location: T.object,
  match: T.object,
  saveNewPost: T.func.isRequired,
  updatePost: T.func.isRequired,
  initialFormValues: T.object,
};

export default PostFormModal;
