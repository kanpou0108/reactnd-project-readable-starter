import React, { Component } from 'react';
import T from 'prop-types';

import VoteScore from '../VoteScore';

class CommentVoteScore extends Component {
  handleVoteUpClick = (event) => {
    event.stopPropagation();
    this.props.voteCommentById(this.props.commentId, 'upVote');
  }

  handleVoteDownClick = (event) => {
    event.stopPropagation();
    this.props.voteCommentById(this.props.commentId, 'downVote');
  }

  render() {
    const { voteScore } = this.props;
    return (
      <VoteScore
        score={voteScore}
        onVoteUp={this.handleVoteUpClick}
        onVoteDown={this.handleVoteDownClick}
      />
    );
  }
}

CommentVoteScore.propTypes = {
  voteScore: T.number.isRequired,
  voteCommentById: T.func.isRequired,
  commentId: T.string.isRequired,
};

export default CommentVoteScore;
