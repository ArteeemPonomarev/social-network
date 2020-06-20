import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialSate = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialSate, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.myAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, email, login));
            }
        });
}

export default authReducer;
//pure function