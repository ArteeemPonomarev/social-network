import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextCreator} from '../../../redux/store'


const MyPosts = (props) => {

  let postsElement = props.state.map(p => <Post message={p.post} likesCounter={p.likes} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  };

  return (

    <div className={s.myPostWrapp}>
      <div className = {s.posts}>
        My posts
        </div>
      <div className = {s.newPost}> 
        New posts
        </div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div className = {s.buttons}>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      
      {postsElement}
      <div className={s.item}>
        Post 2
        </div>
    </div>
  );
}

export default MyPosts;