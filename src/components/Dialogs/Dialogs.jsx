import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, newMessageActionCreator } from '../../redux/dialogs-reducer';



const Dialogs = (props) => {

  let dialogElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElement = props.state.messagesData.map(m => <Message message={m.message} />);

  let newMessageElement = React.createRef();

// передаем в props только dispatch, а не весь store целиком, т. к. нужно передавать компоненте только ее данные

  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  }


  let onMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(newMessageActionCreator(text))
  }



  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        <div>{messageElement} </div>
        <div>
          {/* управляемая компонента каждая буква идет в _state и рендерится*/}
          <textarea ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessage} placeholder="Enter your message" />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
