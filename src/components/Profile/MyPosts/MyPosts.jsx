import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.profilePage.postsData.map(p => <Post message={p.post} likesCounter={p.likes} />);

  let onAddPost = () => {
    props.addPost();
    //2/props.dispatch({type:'ADD-POST'})
    //props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
    //2.props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
    //let action = updateNewPostTextCreator(text);
   // props.dispatch(action);
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
        <textarea onChange={onPostChange} value={props.newPostText} placeholder = "Enter your message"/>
      </div>
      <div className = {s.buttons}>
        <button onClick={onAddPost}>Add post</button>
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