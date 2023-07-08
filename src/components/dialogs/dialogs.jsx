import React from 'react';
import d from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Text = props => {
  return (
    <div>
      <p className={d.text}>{props.text}</p>
    </div>
  );
};

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

const Dialogs = () => {
  let personData = [
    { id: 1, name: 'Bek' },
    { id: 2, name: 'Lera' },
    { id: 3, name: 'sveta' },
    { id: 4, name: 'Lola' },
    { id: 5, name: 'Kate' },
  ];

  let person = personData.map(el => <DialogItem name={el.name} id={el.id} />);

  // let elementsData = [
  //   <DialogItem name={personData[1].name} id={personData[1].id} />,
  //   <DialogItem name={personData[2].name} id={personData[2].id} />,
  //   <DialogItem name={personData[3].name} id={personData[3].id} />,
  //   <DialogItem name={personData[4].name} id={personData[4].id} />,
  // ];

  let messageData = [
    { id: 1, message: 'Hey,Whats up?' },
    { id: 2, message: 'What a u doing?' },
    { id: 3, message: 'Hello what are you doing' },
  ];

  let message = messageData.map(mes => <Text text={mes.message} />);

  // let textData = [
  //   <Text text={messageData[1].message} />,
  //   <Text text={messageData[2].message} />,
  // ];

  return (
    <div className={d.dialogs}>
      <ul>{person}</ul>
      <div>{message}</div>
    </div>
  );
};

export default Dialogs;
