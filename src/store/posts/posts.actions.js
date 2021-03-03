import actionTypes from "../actionTypes";
import axios from "axios";

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCHING_POSTS_START,
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCHING_POSTS_SUCCESS,
        posts: posts,
    }
}

export const fetchPostsFailure = (errorMessage) => {
    return {
        type: actionTypes.FETCHING_POSTS_FAIL,
        errorMessage: errorMessage,
    }
}

export const fetchPosts = () => {
    return dispatch => {

        dispatch(fetchPostsStart());

        axios.get('https://codeial.codingninjas.com:8000/api/v2/ /posts?page=1&limit=5')
            .then(res => {
                dispatch(fetchPostsSuccess(res.data))
                console.log(res.data)
            }).catch(err => {
                dispatch(fetchPostsFailure(err.message));
        })


    }
}