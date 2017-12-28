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
        default:
            return state;
    }
};

// function currentPost(state={}, action){
//     switch (action.type){
//         case types.FETCH_CURRENT_POST:
//             return Object.assign({}, state, action.data);
//         default:
//             return state;
//     }
// };

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
            return [...action.data]
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
    // currentPost,
    categories,
    comments,
    postsOrder,
    commentsOrder
});
