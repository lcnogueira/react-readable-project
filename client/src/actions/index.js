import * as types from './types';

export function fetchPosts({posts}){
    return {
        type: FETCH_POSTS,
        posts,
    };
};