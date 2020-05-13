import React from 'react';
import { sendMessageActionCreator, newMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage

  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.dispatch(newMessageActionCreator(text))
  }

  return <Dialogs updateNewMessageText={onMessageChange}
                  SendMessage={onSendMessageClick}
                  dialogsPage={state}/>;
}

export default DialogsContainer;
