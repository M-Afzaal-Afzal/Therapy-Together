import { combineReducers } from 'redux'
import postsReducer from "./posts/posts.reducer";


// COMBINED REDUCERS
const reducers = {
    postsData: postsReducer
}

export default combineReducers(reducers)