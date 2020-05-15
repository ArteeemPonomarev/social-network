const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialSate = {
    postsData: [{ id: 1, post: 'Hello,everybody', likes: 22 },
    { id: 2, post: 'I am ok', likes: 223 },
    { id: 3, post: 'How are you, my friends?', likes: 132 },
    { id: 4, post: 'I like learn React', likes: 2899 },
    { id: 5, post: 'heeeey', likes: 720 }],
    newPostText: ''
};

const profileReducer = (state = initialSate, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                postsData: [ ...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: 
            return state;
            // this._callSubscriber(this._state); не должны вызывать--- не наша responsibility
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text }
  }

export default profileReducer;
//pure function