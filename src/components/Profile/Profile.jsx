import React from "react";
import MyPostConteiner from "./MyPost/MyPostConteiner";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.content}>
           <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
           <MyPostConteiner />
        </div>
    );
}

export default Profile;