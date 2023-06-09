import React from "react";
import { NavLink } from "react-router-dom";
import s from'./Nav.module.css';

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to="/new" activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink></div>
            <div className={s.itemFreands}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
        </nav>
    );
}

export default Nav;