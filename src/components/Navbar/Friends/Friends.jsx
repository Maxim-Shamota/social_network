import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend";

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <Friend name={f.name} key={f.id}/>)

    return (

        <div>
            <div className={s.friends}>
                <h2>Friends</h2>
                <div className={s.friendsElements}>
                    {friendsElements}
                </div>
            </div>

        </div>
    )
}

export default Friends;