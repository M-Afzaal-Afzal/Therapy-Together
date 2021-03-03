import {createSelector} from "reselect";

const selectPostsDate = state => state.postsData;

export const selectPosts = createSelector(
    [selectPostsDate],
    postsDate => postsDate.posts,
)

export const selectIsFetchingPosts = createSelector(
    [selectPostsDate],
    postsData => postsData.isFetchingPosts,
)

export const selectPostsErrorMessage = createSelector(
    [selectPostsDate],
    postsData => postsData.errorMessage,
)