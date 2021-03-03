import {all, call, put, takeLatest} from 'redux-saga/effects';
import actionTypes from "../actionTypes";
import {fetchPostsSuccess, fetchPostsFailure} from './posts.actions';
import axios from "axios";

function* fetchPosts() {

    try {

        const postsData = yield axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');

        yield put(fetchPostsSuccess(postsData.data));

    } catch (error) {
        yield put(fetchPostsFailure(error.message));
    }

}

export function* fetchPostsStart() {
    yield takeLatest(actionTypes.FETCHING_POSTS_START, fetchPosts);
}

export default function* postsSaga() {
    yield all([
        call(fetchPostsStart),
    ])
}