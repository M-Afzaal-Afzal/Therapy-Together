import {all,call} from 'redux-saga/effects';
import postsSaga from "./posts/posts.saga";

export default function* rootSaga() {
    yield all([
        call(postsSaga),
    ])
}