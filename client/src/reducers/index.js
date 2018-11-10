import { combineReducers } from 'redux';
import posts from './postsReducer';
import categories from './categoriesReducer';
import comments from './commentsReducer';
import postsOrder from './postsOrderReducer';
import commentsOrder from './commentsOrderReducer';

export default combineReducers({
  posts,
  categories,
  comments,
  postsOrder,
  commentsOrder,
});
