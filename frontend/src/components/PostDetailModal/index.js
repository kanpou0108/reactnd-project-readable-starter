import { connect } from 'react-redux';

import { openPostModal, closePostModal } from '../../redux/modules/modal';
import { getPost, getIsFetching } from '../../redux/selectors/posts';
import { getPostModalOpen } from '../../redux/selectors/ui';

import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  const category = ownProps.match.params.category;
  return {
    postModalOpen: getPostModalOpen(state),
    post: getPost(state, postId),
    isFetching: getIsFetching(state, category),
  };
};

export default connect(
  mapStateToProps,
  { openPostModal, closePostModal },
)(Container);
