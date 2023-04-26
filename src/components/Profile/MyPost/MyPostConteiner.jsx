import { addPostActionCreate } from "../../../Redux/profile-reduce";
import MyPost from "./MyPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPosts: (addPostText) => {
            dispatch(addPostActionCreate(addPostText))
        },
    }
}

const MyPostConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostConteiner;