import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klopik.com/uploads/posts/2014-01/1390504695_all-sizes-baby-raccoon-flickr-photo-sharing-1.png" alt="image"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;