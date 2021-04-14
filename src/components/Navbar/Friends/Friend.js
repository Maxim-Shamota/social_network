import React from 'react';
import s from "./Friends.module.css";

const Friend = (props) => {
    return (
        <div className={s.bestFriends}>
            <div className={s.friendAvatar}>
                <img src="https://www.meme-arsenal.com/memes/3fbc577bba972a33aed3262196e3608b.jpg" alt="avatar"/>
            </div>
            <div className={s.bestFriend}>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default Friend;