let token = localStorage.token;
if (!token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  token = localStorage.token;
}

const API_HOST = 'https://mighty-bayou-23270.herokuapp.com';

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

export const getAllCategories = () =>
  fetch(`${API_HOST}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getPostsByCategory = category =>
  fetch(`${API_HOST}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getAllPosts = () =>
  fetch(`${API_HOST}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addNewPost = newPost =>
  fetch(`${API_HOST}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newPost }),
  }).then(res => res.json())
    .then(data => data);

export const getPostById = postId =>
  fetch(`${API_HOST}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const deletePostById = postId =>
  fetch(`${API_HOST}/posts/${postId}`, {
    method: 'DELETE',
    headers,
  })
    .then(res => res);

export const votePost = (postId, option) =>
  fetch(`${API_HOST}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json())
    .then(data => data);

export const updatePost = post =>
  fetch(`${API_HOST}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...post }),
  }).then(res => res.json())
    .then(data => data);

export const getCommentsByPost = postId =>
  fetch(`${API_HOST}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getCommentById = commentId =>
  fetch(`${API_HOST}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const updateComment = comment =>
  fetch(`${API_HOST}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...comment }),
  }).then(res => res.json())
    .then(data => data);

export const addNewComment = newComment =>
  fetch(`${API_HOST}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newComment }),
  }).then(res => res.json())
    .then(data => data);

export const voteComment = (commentId, option) =>
  fetch(`${API_HOST}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  }).then(res => res.json())
    .then(data => data);

export const deleteCommentById = commentId =>
  fetch(`${API_HOST}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
    .then(data => data);
