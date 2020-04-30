const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            postsData: [{ id: 1, post: 'Hello,everybody', likes: 22 },
            { id: 2, post: 'I am ok', likes: 223 },
            { id: 3, post: 'How are you, my friends?', likes: 132 },
            { id: 4, post: 'I like learn React', likes: 2899 },
            { id: 5, post: 'heeeey', likes: 720 }],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {
            friends: [{ name: 'Dima', src: 'https://download-cs.net/steam/avatars/3412.jpg' },
            { name: 'Kostya', src: 'https://www.meme-arsenal.com/memes/36d6c0bca90dd84a2fa69c54fc954a7b.jpg' },
            { name: 'Vadik', src: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' }]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                post: this._state.profilePage.newPostText,
                likes: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessage,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state);
        }
     },

    
}
//action is the OBJECT!!! у action есть обязательное поле {type: 'ADD-POST'}


export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text }
  }

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const newMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}
export default store;
window.store = store;