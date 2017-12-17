import { connect } from 'react-redux';
import { votePostById } from '../../redux/modules/posts';
import { getPostVoteScore } from '../../redux/selectors/posts';

import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;
  return {
    postId,
    voteScore: getPostVoteScore(state, postId),
  };
};

export default connect(
  mapStateToProps,
  { votePostById }
)(Container);
