const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessage,
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage;
            return state;
        default: 
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const newMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default dialogsReducer;
//pure function
//get state and action? and return changed or not changed state