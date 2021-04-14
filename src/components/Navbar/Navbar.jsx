import React from 'react';
import s from './Navbar.module.css';
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <NavbarMenu/>
            <FriendsContainer store={props.store}/>
            <div></div>
        </nav>
    )
}

export default Navbar;