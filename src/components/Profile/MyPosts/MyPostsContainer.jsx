import React from 'react';
import {addPostActionCreator} from '../../../redux/profile-reducer';
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
        addPost: (newPostMessage) => dispatch(addPostActionCreator(newPostMessage))
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;