import { combineReducers } from 'redux';
import * as types from '../actions/types';

function posts(state = {}, action) {

    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                allPosts: action.posts
            };
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

export default combineReducers({
    posts,
    categories,
    comments
});
