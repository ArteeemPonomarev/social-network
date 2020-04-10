import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Sidebar/Friends';

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <ul >
        <li>
          <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
          </div>
        </li>
        <li>
          <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/dialogs'>Messages</NavLink>
          </div>
        </li>
        <li><div className={s.item}>
          <NavLink activeClassName={s.activeLink} to='/news'>News</NavLink>
        </div></li>
        <li><div className={s.item}>
          <NavLink activeClassName={s.activeLink} to='/music'>Music</NavLink>
        </div></li>
        <li><div className={s.item}>
          <NavLink activeClassName={s.activeLink} to='/settings'>Settings</NavLink>
        </div></li>
      </ul>
      {/* <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to='/settings'>Settings</NavLink>
      </div> */}

      <div>
        <Friends info={props.sidebar.friends} />
      </div>
    </nav>
  );
}

export default Navbar;