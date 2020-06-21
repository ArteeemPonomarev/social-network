import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name}
                                                                            id={d.id}
                                                                            key={d.id}/>);

    let messageElement = props.dialogsPage.messagesData.map(m => <Message message={m.message}
                                                                          key={m.id}/>);

// передаем в props только dispatch, а не весь store целиком, т. к. нужно передавать компоненте только ее данные

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    {/* управляемая компонента каждая буква идет в _state и рендерится*/}
                    <textarea onChange={onMessageChange}
                              value={props.dialogsPage.newMessage}
                              placeholder="Enter your message"/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
