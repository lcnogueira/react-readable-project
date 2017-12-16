import * as types from './types';
import * as Api from '../utils/Api';

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