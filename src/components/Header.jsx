import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="http://www.annelishundsim.se/wp-content/uploads/2017/04/webicon.png" alt="logo"/>
        </header>
    )
}

export default Header;