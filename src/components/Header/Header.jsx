import React from 'react';
import h from './Header.module.css';
import s from './../Navbar/Navbar.module.css';

const Header = () => {
return (
<header className={h.Header}>

<img src='https://data.whicdn.com/images/329023130/original.jpg'/>

{/* 
  <div className={h.search}>
  <div className={s.fontStyle}>Find:</div>
  <input className={h.input}></input>
  </div>  */}
  </header>   
)
}

export default Header;