import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            my posts
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;