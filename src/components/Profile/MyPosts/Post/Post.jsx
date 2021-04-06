import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img1.goodfon.ru/wallpaper/nbig/9/a2/rengo-multfilm-hameleon.jpg" alt="image"/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;