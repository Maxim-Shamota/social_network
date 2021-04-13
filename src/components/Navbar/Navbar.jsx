import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    // let friendsElements = props.friends.map(f => <Friends name={f.name} id={f.id}/>)

    return (
        <nav className={s.nav}>

            <div>
                <div className={`${s.item} ${s.active}`}><NavLink to='/profile'
                                                                  activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
                <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
            </div>

            {/*<div className={s.friends}>*/}
            {/*    <h2>Friends</h2>*/}
            {/*    <div className={s.friendsElements}>*/}
            {/*            {friendsElements}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div></div>
        </nav>
    )
}

export default Navbar;