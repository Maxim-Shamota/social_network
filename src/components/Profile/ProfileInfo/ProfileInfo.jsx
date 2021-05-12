import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersAvatar from "../../../assets/images/tenor.gif";
import mainPhoto from "./../../../assets/images/enotic.png"

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src={mainPhoto} alt="image" />
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.mainAvatarWrapper}>
                    <img src={profile.photos.large || usersAvatar} className={s.mainAvatar} />
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} className={s.status}/>
                <p>My ID - {profile.userId}</p>
                <p>My name - {profile.fullName}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;