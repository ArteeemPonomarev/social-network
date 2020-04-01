import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

let dialogElements = props.state.dialogsData.map(d => <DialogItem name = {d.name} id = {d.id} />);

let messageElement = props.state.messagesData.map(m => <Message message={m.message}/>);

let newMessageElement = React.createRef();
const addMessageCreator = () => ({type:'ADD-MESSAGE'})

let addMessage = () => {
  //props.addMessage();
  props.dispatch(addMessageCreator());
}

const onMessageChangeCreator = (text) => ({type:'UPDATE-NEW-MESSAGE-POST', newText: text}) 

let onMessageChange = () => {
  let text = newMessageElement.current.value;
  //props.updateNewMessagePost(text);
  props.dispatch(onMessageChangeCreator(text))
}



return (
        <div className = {s.dialogs}> 
            <div className = {s.dialogItems}>
              { dialogElements}
            </div>
            <div className = {s.messages}> 
              {messageElement}  
              <textarea ref = {newMessageElement} onChange = {onMessageChange} value = {props.state.newMessage} />
              <div><button onClick = {addMessage}>Send Message</button></div>
            </div>
        </div>
    );
}

export default Dialogs;
