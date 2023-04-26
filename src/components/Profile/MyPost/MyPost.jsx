import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const MyPost = React.memo(props => {
    let postElement = props.posts.map(p => <Post message={p.text } value={p.likeCount}/>)
    
    let onAddPost = (values) => {
        props.addPosts(values.addPostText);
    }

    return (
        <div className={s.content}>
            My posts
            <PostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postElement }
            </div>
        </div>
    );
});

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="addPostText" validate={[required, maxLenghtCreator(10)]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({form: "post"})(PostForm)

export default MyPost;