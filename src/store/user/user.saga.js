import actionTypes from "../actionTypes";
import {put, all, call, takeLatest} from 'redux-saga/effects'
import {createUserProfileDocument, facebookProvider, googleProvider} from "../../utils/firebaseUtils";
import {
    signInFailure,
    signInSuccess,
    signOutSuccess
} from './user.actions'
import {auth} from "../../utils/firebaseUtils";

function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        signInFailure(error.message)
    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        console.log(user);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* signInWithFacebook() {
    try {
        const {user} = yield auth.signInWithPopup(facebookProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onFacebookSignInStart() {
    yield takeLatest(actionTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook)
}

function* signInWithEmail({email, password}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

function* onEmailSignInStart() {
    yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signUp({name, email, password}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth({...user, displayName: name})

    } catch (error) {
        yield put(signInFailure(error.message));
    }

}

function* onSignUpStart() {
    yield takeLatest(actionTypes.SIGN_UP_START, signUp)
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onSignOutStart() {
    yield takeLatest(actionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onFacebookSignInStart),
        call(onSignUpStart),
        call(onSignOutStart)
    ])
}