import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://littletravel.ru/wp-content/uploads/2020/05/azoren_254083921_1920x1280.jpg" alt="image"/>
            </div>
            <div>
                ava + descr
            </div>
            <div className={s.posts}>
                my posts
                <div>
                    new post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;