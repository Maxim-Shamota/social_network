import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} 
                         status={props.status} 
                         updateStatus={props.updateStatus} 
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         isOwner={props.isOwner}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;