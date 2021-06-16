import React from "react";
import MyPost from "./My Post/MyPost";
import p from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/> >
            <MyPost postDate={props.postDate}
                    newPost={props.newPost}
                    dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
