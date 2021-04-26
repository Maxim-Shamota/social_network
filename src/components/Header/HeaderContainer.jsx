import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://bumper-stickers.ru/62203-thickbox_default/enot.jpg" alt="logo"/>

            <div className={s.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;