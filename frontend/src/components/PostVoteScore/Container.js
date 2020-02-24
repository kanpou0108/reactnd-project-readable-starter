import React, { Component } from 'react';
import T from 'prop-types';

import VoteScore from '../VoteScore';

class PostVoteScore extends Component {
  handleVoteUpClick = (event) => {
    event.stopPropagation();
    this.props.votePostById(this.props.postId, 'upVote');
  }
  handleVoteDownClick = (event) => {
    event.stopPropagation();
    this.props.votePostById(this.props.postId, 'downVote');
  };

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

PostVoteScore.propTypes = {
  voteScore: T.number.isRequired,
  votePostById: T.func.isRequired,
  postId: T.string.isRequired,
};

export default PostVoteScore;