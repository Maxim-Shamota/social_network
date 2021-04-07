import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

    return (
        <div className={s.bestFriends}>
            <div className={s.friendAvatar}>
                <img src="https://4lapki.com/wp-content/uploads/2019/03/http-vestikavkaza-ru-upload-2019-01-02-154644941.jpeg" alt="avatar"/>
            </div>
            <div className={s.bestFriend}>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default Friends;