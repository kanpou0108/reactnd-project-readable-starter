import { connect } from 'react-redux';
import { voteCommentById } from '../../redux/modules/comments';
import { getCommentVoteScore } from '../../redux/selectors/comments';

import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.commentId;
  return {
    commentId,
    voteScore: getCommentVoteScore(state, commentId),
  };
};

export default connect(
  mapStateToProps,
  { voteCommentById }
)(Container);
