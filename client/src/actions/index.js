import * as types from './types';
import * as Api from '../utils/Api';

/* Posts actions */
export function fetchPosts(){
    return dispatch => {
        Api.getPosts().then( data => 
            dispatch({
                type: types.FETCH_POSTS,
                data
            })
        );
    };
};

export function fetchPostsByCategory(category){
    return dispatch => {
        Api.getPostsByCategory(category).then( data => 
            dispatch({
                type: types.FETCH_POSTS,
                data
            })
        );
    };
};

export function fetchPostById(id){
    return dispatch => {
        Api.getPostById(id).then( data => 
            dispatch({
                type: types.FETCH_POSTS,
                data: [data]
            })
        );
    };
};

export function addPost(post){
    return dispatch => {
        Api.addPost(post).then ( data =>
            dispatch({
                type: types.ADD_POST,
                data
            })
        );
    };
};

export function updatePost(post){
    return dispatch => {
        Api.updatePost(post).then( data => 
            dispatch({
              type: types.UPDATE_POST,
              data 
            })
        );
    };
};

export function votePost(id, option){
    return dispatch => {
        Api.votePost(id, option).then ( data =>
            dispatch({
                type: types.UPDATE_POST,
                data
            })
        )        ;
    };
};

export function deletePost(data){
    return dispatch => {
        Api.deletePost(data.id).then(res => {
            if (res.status === 200) {
                dispatch({
                    type: types.DELETE_POST,
                    value: data
                });
            }
        })
    };
};

/* Category actions */
export function fetchCategories() {
    return dispatch => {
        Api.getCategories().then( data => 
            dispatch({
                type: types.FETCH_CATEGORIES, 
                data
            })
        );
    };
};

/* Comments actions */
export function fetchCommentsByPost(postId){
    return dispatch => {
        Api.getCommentsByPost(postId).then ( data =>
            dispatch({
                type: types.FETCH_COMMENTS,
                data
            })
        );
    };
};

export function voteComment(id, option){
    return dispatch => {
        Api.voteComment(id, option).then ( data =>
            dispatch({
                type: types.UPDATE_COMMENT,
                data
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

