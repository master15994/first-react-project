import React from 'react';
import n from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  return (
    <nav className={n.nav}>
      <ul>
        <li>
          <NavLink to="/profile">{props.classes.p}</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">{props.classes.m}</NavLink>
        </li>
        <li>
          <NavLink to="/music">{props.classes.mu}</NavLink>
        </li>
        <li>
          <NavLink to="/messages">{props.classes.m}</NavLink>
        </li>
        <li>
          <NavLink to="/settings">{props.classes.s}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
