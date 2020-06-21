import React from 'react';
import {sendMessageActionCreator, newMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return (
        {
            dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;
