import { combineReducers } from 'redux'
// import postsReducer from "./posts/posts.reducer";
import userReducer from "./user/user.reducer";


// COMBINED REDUCERS
const reducers = {
    // postsData: postsReducer,
    user: userReducer,
}

export default combineReducers(reducers)