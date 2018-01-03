import * as types from '../actions/types';

const posts = (state = [], action) => {
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

export default posts;