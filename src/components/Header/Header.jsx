import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png" />
            <div className={s.loginBlock}>
                { props.isAuth 
                ? <div>{props.login} <br/> <button onClick={props.logoutThunk}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;