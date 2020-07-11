import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const MyPosts = (props) => {

    let postsElement = props.profilePage.postsData.map(p => <Post message={p.post} likesCounter={p.likes}/>);


    let sendNewPost = (values) => {
        props.addPost(values.addNewPost)
    }

    return (
        <div className={s.myPostWrapp}>
            <div className={s.posts}>
                My posts
            </div>
            <div className={s.newPost}>
                New posts
            </div>
            <AddNewPostRedux onSubmit={sendNewPost}/>
            {postsElement}
            <div className={s.item}>
                Post 2
            </div>
        </div>
    );
}

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength10]} name={'addNewPost'} placeholder={'Enter your message'}/>
            </div>
            <div className={s.buttons}>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({form: 'addNewPost'})(AddNewPost)

export default MyPosts;