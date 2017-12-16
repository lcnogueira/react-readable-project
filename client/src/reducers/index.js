import { combineReducers } from 'redux';
import * as types from '../actions/types';

function posts(state = {}, action) {

    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                allPosts: action.posts
            };
        default:
            return state;
    }
};

function categories(state = {}, action){
    switch(action.type){

        case types.FETCH_CATEGORIES:
            return {
                ...state,
                allCategories: action.categories.categories
            };

        default:
            return state
    }
}

export default combineReducers({
    posts,
    categories
});
