import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'social-network/profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'social-network/profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profile/SET_STATUS';

let initialSate = {
    postsData: [{id: 1, post: 'Hello,everybody', likes: 22},
        {id: 2, post: 'I am ok', likes: 223},
        {id: 3, post: 'How are you, my friends?', likes: 132},
        {id: 4, post: 'I like learn React', likes: 2899},
        {id: 5, post: 'heeeey', likes: 720}],
    profile: null,
    status: ''
};

const profileReducer = (state = initialSate, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                post: action.newPostMessage,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostMessage) => ({type: ADD_POST, newPostMessage});
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

const setStatus = (status) => {
    return {type: SET_STATUS, status}
}
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


//thunks
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.getStatus(status)
    dispatch(setStatus(response.data))
}


export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
