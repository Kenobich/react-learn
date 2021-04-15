import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.fontStyle}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.fontStyle}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Message
        </NavLink>
      </div>
      <div className={s.fontStyle}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.fontStyle}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.fontStyle}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={s.fontStyle}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          Friends
        </NavLink>
      </div>
      <div className={s.fontStyle}>
        <NavLink to="/friendsGrid" activeClassName={s.activeLink}>
          FriendsGrid
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
