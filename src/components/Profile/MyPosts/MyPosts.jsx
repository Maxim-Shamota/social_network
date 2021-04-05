import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div>
                <textarea name="textarea" id="" cols="30" rows="3"></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, it`s my first message' like='2'/>
            <Post message='It`s my second message' like='10'/>
        </div>
    )
}

export default MyPosts;