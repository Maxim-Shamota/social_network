import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import avatar from './../../assets/images/avatar.jpg';
import logo from './../../assets/images/logo.png';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>

            <div className={s.loginBlock}>
                <div className={s.avatar}>
                    <img src={avatar}/>
                </div>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;