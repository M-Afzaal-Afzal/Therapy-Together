import actionTypes from "../actionTypes";

import produce from "immer";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isLoading: false,
};

const userReducer = produce((draft, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            draft.currentUser = action.user;
            draft.error = null;
            draft.isLoading = false;
            break;
        case actionTypes.SIGN_IN_FAILURE:
            draft.isLoading = false;
            draft.error = action.error;
            break;
        case actionTypes.GOOGLE_SIGN_IN_START:
        case actionTypes.EMAIL_SIGN_IN_START:
        case actionTypes.FACEBOOK_SIGN_IN_START:
        case actionTypes.SIGN_UP_START:
        case actionTypes.SIGN_OUT_START:
            draft.isLoading = true;
            draft.error = null;
            break;
        case actionTypes.SIGN_OUT_SUCCESS:
            draft.currentUser = null;
            draft.isLoading = false;
            draft.error = null;

    }
}, INITIAL_STATE);

export default userReducer;