import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import avatar from './../../assets/images/avatar.jpg';
import logo from './../../assets/images/logo.png';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src={logo} alt="logo" className={s.logo}/>

            <div className={s.loginBlock}>
                <div className={s.avatarWrapper}>
                    <img src={avatar} className={s.avatar}/>
                </div>
                <div className={s.loginName}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;