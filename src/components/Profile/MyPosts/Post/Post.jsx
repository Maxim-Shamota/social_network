import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://s1.1zoom.ru/big3/604/Raccoons_Closeup_Eyes_Snout_Glance_Whiskers_Nose_565212_2048x2048.jpg" alt="image"/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;