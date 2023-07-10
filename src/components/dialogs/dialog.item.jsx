import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './dialogs.module.css';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;

  return (
    <li>
      <NavLink to={path} className={d.dialog}>
        {props.name}
      </NavLink>
    </li>
  );
};
export default DialogItem;
