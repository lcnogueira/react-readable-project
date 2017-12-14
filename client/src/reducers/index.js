import { combineReducers } from 'redux';

import {
    LOAD_POSTS,
} from '../actions';

const initialPosts = {

};

function posts(state = initialPosts, action) {

    const{posts} = action;

    switch (action.type) {
        case LOAD_POSTS:
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
