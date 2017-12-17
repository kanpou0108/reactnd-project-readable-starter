import React from 'react';
import T from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FaUser } from 'react-icons/lib/fa';
import { convertUnixTimestampToDate } from '../../utils/helpers';
import PostFooter from '../PostFooter';
import VoteScore from '../../components/VoteScore';

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
    <VoteScore postId={id} />
    <div className={styles.postContent}>
      <div className={styles.postCategories}>
        <span className={styles.postCategory}>{category}</span>
      </div>
      <div className={styles.postTitle}>
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
      <PostFooter
        postId={id}
        category={category}
        showBody={showBody}
      />
    </div>
  </div>
);

Post.propTypes = {
  id: T.string.isRequired,
  category: T.string.isRequired,
  title: T.string.isRequired,
  author: T.string.isRequired,
  timestamp: T.number.isRequired,
  body: T.string.isRequired,
  showBody: T.bool,
  location: T.object.isRequired,
  match: T.object.isRequired,
};

export default withRouter(Post);
