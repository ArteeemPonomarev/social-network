const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: state.newPostText,
                likes: 0
            };
    
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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