import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import avatar from './../../assets/images/avatar.jpg'

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://bumper-stickers.ru/62203-thickbox_default/enot.jpg" alt="logo"/>

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