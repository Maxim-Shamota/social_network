import React from "react";
import styles from "./Users.module.css";
import usersAvatar from "../../assets/images/avatar.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.main}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.selectPage}
                             onClick={(e) => {
                                props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.userCard}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : usersAvatar} alt="avatar"
                             className={styles.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users