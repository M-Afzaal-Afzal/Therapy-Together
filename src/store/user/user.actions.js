import actionTypes from "../actionTypes";

export const signInSuccess = (user) => {
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        user: user,
    }
}

export const signInFailure = (error) => {
    return {
        type: actionTypes.SIGN_IN_FAILURE,
        error: error,
    }
}

export const googleSignInStart = () => {
    return {
        type: actionTypes.GOOGLE_SIGN_IN_START,
    }
}

export const facebookSignInStart = () => {
    return {
        type: actionTypes.FACEBOOK_SIGN_IN_START,
    }
}

export const emailSignInStart = (email,password) => {
    return {
        type: actionTypes.EMAIL_SIGN_IN_START,
        email: email,
        password: password,
    }
}

export const signUpStart = (name,email,password) => {
    return {
        type: actionTypes.SIGN_UP_START,
        name: name,
        email: email,
        password: password,
    }
}

export const signOutStart = () => {
    return {
        type: actionTypes.SIGN_OUT_START,
    }
}

export const signOutSuccess = () => {
    return {
        type: actionTypes.SIGN_OUT_SUCCESS,
    }
}

export const clearError = () => {
    return {
        type: actionTypes.CLEAR_ERROR,
    }
}