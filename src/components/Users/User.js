import React from "react";
import styles from "./Users.module.css";
import usersAvatar from "../../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return(
        <div className={styles.userCard}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : usersAvatar} alt="avatar"
                            className={styles.avatar} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </div>
            </div>
        </div>)
}



export default User