
import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
    <nav className={s.nav}>
       <div className= {s.fontStyle}>
              <a href='/profile'> Profile </a>
       </div>
       <div className={s.fontStyle}>
              <a href='/dialogs'>   Message </a>
       </div>
       <div className={s.fontStyle}>
              <a> Music </a>
       </div>
       <div className={s.fontStyle}>
              <a> News </a>
       </div>
       <div className={s.fontStyle}>
              <a> Settings </a>
       </div>
       <div className={s.fontStyle}>
              <a href='/friends'>Friends</a>
       </div>
       <div className={s.fontStyle}>
              <a href='/friendsGrid'>FriendsGrid</a>
       </div>
    </nav>
    
    )
}
export default Navbar;