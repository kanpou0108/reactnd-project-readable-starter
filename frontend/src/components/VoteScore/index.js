import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretSquareODown, FaCaretSquareOUp } from 'react-icons/lib/fa';

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
        <FaCaretSquareOUp />
      </span>
      <div className={`${styles.voteScore} ${score < 0 ? styles.negative : styles.positive}`}><span>{score}</span></div>
      <span
        role="button"
        tabIndex="0"
        className={styles.voteControlDown}
        onClick={onVoteDown}
      >
        <FaCaretSquareODown />
      </span>
    </div>
  );
};

VoteScore.propTypes = {
  score: PropTypes.number.isRequired,
  onVoteUp: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
};

export default VoteScore;
