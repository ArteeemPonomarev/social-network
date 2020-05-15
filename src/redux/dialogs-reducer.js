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

    newMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessage,
            };
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        }
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