import React from 'react';
import T from 'prop-types';
import { ThumbUpSVG, ThumbDownSVG } from './icons'

import styles from './styles.css';

const VoteScore = (props) => {
  const { score, onVoteUp, onVoteDown } = props;
  return (
    <div className={styles.voteScoreWrapper}>
      <span
        role="button"
        className={styles.voteControlUp}
        tabIndex="0"
        onClick={onVoteUp}
      >
        <ThumbUpSVG />
      </span>
      <div className={`${styles.voteScore} ${score < 0 ? styles.negative : styles.positive}`}><span>{score}</span></div>
      <span
        role="button"
        tabIndex="0"
        className={styles.voteControlDown}
        onClick={onVoteDown}
      >
        <ThumbDownSVG />
      </span>
    </div>
  );
};

VoteScore.propTypes = {
  score: T.number.isRequired,
  onVoteUp: T.func.isRequired,
  onVoteDown: T.func.isRequired,
};

export default VoteScore;
