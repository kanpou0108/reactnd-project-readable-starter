import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/lib/fa';
import Post from '../Post';
import SortList from '../SortList';
import { capitalize } from '../../utils/helpers';

import styles from './styles.css';

const PostsList = ({ posts, category, handleSort, location, match }) => (
  <div>
    <div className={styles.subheader}>
      <h2><Link to="/">All Categories</Link>{`${category !== 'all' ? ` > ${capitalize(category)}` : ''}` }</h2>
      <SortList items={posts} parentId={category} handleSort={handleSort} />
    </div>
    <div className={styles.listPosts}>
      {posts.length > 0 ? posts.map(post => (
        <Post key={post.id} {...post} />
      ))
        : <p>There are no posts to display</p>}

    </div>
    <div className={styles.addNewPost}>
      <Link to={{ pathname: '/posts/new', state: { prevPath: location, prevMatch: match } }}>
        <FaPlus />
        <span>{'Add new post'}</span>
      </Link>
    </div>
  </div>
);

PostsList.propTypes = {
  posts: T.arrayOf(T.object).isRequired,
  category: T.string.isRequired,
  handleSort: T.func.isRequired,
  location: T.object.isRequired,
  match: T.object.isRequired,
};

export default PostsList;
