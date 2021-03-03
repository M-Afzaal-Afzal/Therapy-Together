import produce from "immer";
import actionTypes from "../actionTypes";

const INITIAL_STATE = {
    posts: [],
    isFetchingPosts: false,
    errorMessage: '',
}

const postsReducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_POSTS_START:
            draft.isFetchingPosts = true;
            break;
        case actionTypes.FETCHING_POSTS_SUCCESS:
            draft.posts = action.posts;
            draft.isFetchingPosts = false;
            break;
        case actionTypes.FETCHING_POSTS_FAIL:
            draft.isFetchingPosts = false;
            draft.errorMessage = action.errorMessage;
            break;
    }
}, INITIAL_STATE)

export default postsReducer;