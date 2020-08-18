import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';


let initialSate = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null

};

const authReducer = (state = initialSate, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})


export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.myAuth()

    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }

}

export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe, captcha)

    if (response.resultCode === 0) {
        //success get auth data
        dispatch(getAuthUserData())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logOut = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
//pure function