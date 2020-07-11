const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [{ id: 1, name: 'Dimych' },
    { id: 2, name: 'Artem' },
    { id: 3, name: 'Yulia' },
    { id: 4, name: 'Denchik' },
    { id: 5, name: 'Jeka' }
    ],

    messagesData: [{ id: 1, message: 'Hi' },
    { id: 2, message: 'how is your it-kamasutra?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'I\'am fine' },
    { id: 5, message: 'heeeey' }
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [ ...state.messagesData,  { id: 6, message: body }]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage:  action.newMessage
            }
        default: 
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export const newMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default dialogsReducer;
//pure function
//get state and action? and return changed or not changed state