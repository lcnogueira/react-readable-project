import { combineReducers } from 'redux';

import {
    FETCH_POSTS,
} from '../actions/types';

const initialPosts = {

};

function posts(state = initialPosts, action) {

    const{posts} = action;

    switch (action.type) {
        case FETCH_POSTS:
            return {
                posts
            };
        default:
            return state;
    }
};

export default combineReducers({
    posts,
});
