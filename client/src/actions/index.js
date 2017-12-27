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

export function fetchPostById(id){
    return dispatch => {
        Api.getPostById(id).then( post => 
            dispatch({
                type: types.FETCH_CURRENT_POST,
                post
            })
        );
    };
};

export function addPost(post){
    return dispatch => {
        Api.addPost(post).then ( newPost =>
            dispatch({
                type: types.ADD_POST,
                newPost
            })
        );
    };
};

export function updatePost(post){
    return dispatch => {
        Api.updatePost(post).then( newPost => 
            dispatch({
              type: types.UPDATE_POST,
              newPost 
            })
        );
    };
};

export function votePost(id, option){
    return dispatch => {
        Api.votePost(id, option).then ( newPost =>
            dispatch({
                type: types.UPDATE_POST,
                newPost
            })
        )        ;
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

/* Comments actions */
export function fetchCommentsByPost(postId){
    return dispatch => {
        Api.getCommentsByPost(postId).then ( comments =>
            dispatch({
                type: types.FETCH_COMMENTS,
                comments
            })
        );
    };
};

/** Order actions */
export function sortPosts(order){
    return dispatch => {
        dispatch({
            type: types.SORT_POSTS,
            value: order
        })
    }
}

