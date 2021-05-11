import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersAvatar from "../../../assets/images/avatar.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://klopik.com/uploads/posts/2014-01/1390504695_all-sizes-baby-raccoon-flickr-photo-sharing-1.png" alt="image"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || usersAvatar} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p>My ID - {props.profile.userId}</p>
                <p>My name - {props.profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;