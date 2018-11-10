import * as types from './types';
import * as Api from '../utils/Api';

/* Category actions */
export const fetchCategories = () => dispatch =>
  Api.getCategories().then(data =>
    dispatch({
      type: types.FETCH_CATEGORIES,
      data,
    })
  );

/* Posts actions */
export const fetchPosts = () => dispatch =>
  Api.getPosts().then(data =>
    dispatch({
      type: types.FETCH_POSTS,
      data,
    })
  );

export const fetchPostsByCategory = category => dispatch =>
  Api.getPostsByCategory(category).then(data =>
    dispatch({
      type: types.FETCH_POSTS,
      data,
    })
  );

export const fetchPostById = id => dispatch =>
  Api.getPostById(id).then(data =>
    dispatch({
      type: types.FETCH_POSTS,
      data: [data],
    })
  );

export const addPost = post => dispatch =>
  Api.addPost(post).then(data =>
    dispatch({
      type: types.ADD_POST,
      data,
    })
  );

export const updatePost = post => dispatch =>
  Api.updatePost(post).then(data =>
    dispatch({
      type: types.UPDATE_POST,
      data,
    })
  );

export const votePost = (id, option) => dispatch =>
  Api.votePost(id, option).then(data =>
    dispatch({
      type: types.UPDATE_POST,
      data,
    })
  );

export const deletePost = data => dispatch =>
  Api.deletePost(data.id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: types.DELETE_POST,
        value: data,
      });
    }
  });

/* Comments actions */
export const addComment = comment => dispatch =>
  Api.addComment(comment).then(data => {
    dispatch({
      type: types.ADD_COMMENT,
      data,
    });
  });

export const updateComment = comment => dispatch =>
  Api.updateComment(comment).then(data =>
    dispatch({
      type: types.UPDATE_COMMENT,
      data,
    })
  );

export const fetchCommentsByPost = postId => dispatch =>
  Api.getCommentsByPost(postId).then(data =>
    dispatch({
      type: types.FETCH_COMMENTS,
      data,
    })
  );

export const voteComment = (id, option) => dispatch =>
  Api.voteComment(id, option).then(data =>
    dispatch({
      type: types.UPDATE_COMMENT,
      data,
    })
  );

export const deleteComment = data => dispatch =>
  Api.deleteComment(data.id).then(data => {
    dispatch({
      type: types.DELETE_COMMENT,
      value: data,
    });
  });

/** Order actions */
export const sortPosts = order => dispatch =>
  dispatch({
    type: types.SORT_POSTS,
    value: order,
  });
