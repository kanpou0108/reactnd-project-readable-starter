import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FaUser } from 'react-icons/lib/fa';
import { convertUnixTimestampToDate } from '../../utils/helpers';
import PostFooterContainer from '../../containers/PostFooterContainer';
import PostVoteScore from '../../containers/PostVoteScore';

import styles from './styles.css';

const Post = ({
  id,
  category,
  title,
  author,
  timestamp,
  body,
  showBody,
  location,
  match,
}) => (
  <div className={styles.post}>
    <PostVoteScore postId={id} />
    <div className={styles.postContent}>
      <div className={styles.postCategories}>
        <span className={styles.postCategory}>{category}</span>
      </div>
      <div className={styles.post-title}>
        <h2>
          <Link
            to={{ pathname: `/${category}/${id}`,
              state: { prevPath: location, prevMatch: match } }}
          >
            {title}
          </Link>
        </h2>
      </div>
      <div className={styles.postDetails}>
        <span>{'Posted by '}<FaUser />{` ${author} on ${convertUnixTimestampToDate(timestamp)}`}</span>
      </div>
      { showBody && (
        <div className={styles.postBody}>
          <p>{body}</p>
        </div>)
      }
      <PostFooterContainer
        postId={id}
        category={category}
        showBody={showBody}
      />
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  showBody: PropTypes.bool,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Post);