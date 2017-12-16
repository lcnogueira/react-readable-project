import * as types from './types';
import * as Api from '../utils/Api';

/* Posts actions */
export function fetchPosts(){
    return dispatch => {
        Api.getPosts().then( posts => 
            dispatch({
                type: types.FETCH_POSTS,
                posts
            })
        );
    };
};

export function fetchPostsByCategory(category){
    return dispatch => {
        Api.getPostsByCategory(category).then( posts => 
            dispatch({
                type: types.FETCH_POSTS,
                posts
            })
        );
    };
};

/* Category actions */
export function fetchCategories() {
    return dispatch => {
        Api.getCategories().then( categories => 
            dispatch({
                type: types.FETCH_CATEGORIES, 
                categories
            })
        );
    };
};

