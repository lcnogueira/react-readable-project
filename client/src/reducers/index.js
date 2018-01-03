import { combineReducers } from 'redux';
import * as types from '../actions/types';
import { DEFAULT_ORDER } from '../utils/orderTypes';


function posts(state = [], action) {
    switch (action.type) {
        case types.FETCH_POSTS:
            return [...action.data];
        case types.ADD_POST:
            return[...state, action.data];
        case types.UPDATE_POST:
            return state.map(post => (action.data.id === post.id ? action.data : post));
        case types.DELETE_POST:
            return state.filter(post => post.id !== action.value.id);
        default:
            return state;
    }
};

function categories(state = [], action) {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return action.data;
        default:
            return state;
    }
};

function comments(state = [], action) {
    switch (action.type) {
        case types.FETCH_COMMENTS:
            return [...action.data];
        case types.ADD_COMMENT:
            return[...state, action.data];
        case types.UPDATE_COMMENT:
            return state.map(comment => action.data.id === comment.id ? action.data : comment);
        case types.DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.value.id);
        default:
            return state;
    }
};

function postsOrder(state = DEFAULT_ORDER, action) {
    switch (action.type) {
      case types.SORT_POSTS:
        return action.value;
      default:
        return state;
    }
};

function commentsOrder(state = DEFAULT_ORDER, action) {
    switch (action.type) {
      case types.SORT_COMMENTS:
        return action.value;
      default:
        return state;
    }
};

export default combineReducers({
    posts,
    categories,
    comments,
    postsOrder,
    commentsOrder
});