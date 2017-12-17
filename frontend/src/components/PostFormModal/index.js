import { connect } from 'react-redux';

import { openPostModal, closePostModal } from '../../redux/modules/modal';
import { saveNewPost, updatePost } from '../../redux/modules/posts';
import { getPost } from '../../redux/selectors/posts';
import { getPostModalOpen } from '../../redux/selectors/ui';

import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  return {
    postModalOpen: getPostModalOpen(state),
    initialFormValues: getPost(state, postId),
  };
}

export default connect(
  mapStateToProps,
  { openPostModal, closePostModal, saveNewPost, updatePost },
)(Container);
