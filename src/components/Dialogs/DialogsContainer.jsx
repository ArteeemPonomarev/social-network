import React from 'react';
import {sendMessageActionCreator, newMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return (<StoreContext.Consumer>
            { store => {

                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(newMessageActionCreator(text))
                }

                return (<Dialogs updateNewMessageText={onMessageChange}
                                 SendMessage={onSendMessageClick}
                                 dialogsPage={state}/>)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
