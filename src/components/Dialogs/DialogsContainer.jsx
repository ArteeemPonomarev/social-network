import React from 'react';
import {sendMessageActionCreator, newMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        {
            dialogsPage: state.dialogsPage,
            isAuth: state.auth.isAuth
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return (
        {
            sendMessage: () => {
                dispatch(sendMessageActionCreator());
            },
            updateNewMessageText: (body) => {
                dispatch(newMessageActionCreator(body));
            }
        }
    )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
