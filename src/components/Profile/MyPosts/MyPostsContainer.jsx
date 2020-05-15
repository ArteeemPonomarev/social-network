import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return (
        {
            profilePage: state.profilePage,
            newPostText: state.profilePage.newPostText
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text) => dispatch(updateNewPostTextCreator(text))
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;