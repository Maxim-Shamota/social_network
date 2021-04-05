import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://littletravel.ru/wp-content/uploads/2020/05/azoren_254083921_1920x1280.jpg" alt="image"/>
            </div>
            <div>
                ava + descr
            </div>
                <MyPosts />
        </div>
    )
}

export default Profile;