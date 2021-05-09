import React from "react";
import styles from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props }) => {

    return <div className={styles.main}>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount} pageSize={pageSize} />

        {
            users.map(u => <User key={u.id}
                className={styles.userCard}
                user={u}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow} />)
        }
    </div>
}

    export default Users