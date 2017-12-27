import { combineReducers } from 'redux';
import * as types from '../actions/types';
import { DEFAULT_ORDER } from '../utils/orderTypes';


function posts(state = {}, action) {

    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                allPosts: action.posts
            };
        case types.FETCH_CURRENT_POST:
            return {
                ...state,
                current: action.post
            }
        case types.ADD_POST:
            return{
                ...state, 
                newPost: action.newPost
            }
        default:
            return state;
    }
};

function categories(state = {}, action) {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                allCategories: action.categories.categories
            };

        default:
            return state;
    }
};

function comments(state = {}, action) {
    switch (action.type) {
        case types.FETCH_COMMENTS:
            return {
                ...state,
                allComments: action.comments
            }
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
}

function commentsOrder(state = DEFAULT_ORDER, action) {
    switch (action.type) {
      case types.SORT_COMMENTS:
        return action.value;
      default:
        return state;
    }
}

export default combineReducers({
    posts,
    categories,
    comments,
    postsOrder,
    commentsOrder
});
