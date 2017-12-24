const url = `http://localhost:3001`;

const headers = {
  Accept: 'application/json',
  Authorization: 'auth',
  'Content-type': 'application/json'
};

export const getCategories = () =>
  fetch(`${url}/categories`, { headers })
    .then(res => res.json());

export const getPosts = () => 
  fetch(`${url}/posts`,{ headers })
  .then( res => res.json());

export const getPostsByCategory = category =>
  fetch(`${url}/${category}/posts`, { headers })
  .then(res => res.json());

export const getPostById = id => 
  fetch(`${url}/posts/${id}`, { headers })
  .then(res => res.json());

export const addPost = post =>
  fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const getCommentsByPost = id =>
  fetch(`${url}/posts/${id}/comments`, { headers })
  .then(res => res.json());
