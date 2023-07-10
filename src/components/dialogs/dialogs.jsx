import React from 'react';
import d from './dialogs.module.css';
import DialogItem from './dialog.item';

const Text = props => {
  return (
    <div>
      <p className={d.text}>{props.text}</p>
    </div>
  );
};

const Dialogs = props => {
  const newPostInfo = React.createRef();
  const addPost = () => {
    let text = newPostInfo.current.value;
    alert(text);
  };
  let person = props.dialogs.map(el => (
    <DialogItem name={el.name} id={el.id} />
  ));

  // let elementsData = [
  //   <DialogItem name={personData[1].name} id={personData[1].id} />,
  //   <DialogItem name={personData[2].name} id={personData[2].id} />,
  //   <DialogItem name={personData[3].name} id={personData[3].id} />,
  //   <DialogItem name={personData[4].name} id={personData[4].id} />,
  // ];

  let message = props.messages.map(mes => <Text text={mes.message} />);

  // let textData = [
  //   <Text text={messageData[1].message} />,
  //   <Text text={messageData[2].message} />,
  // ];

  return (
    <div className={d.dialogs}>
      <ul>{person}</ul>
      <div>{message}</div>
      <div>
        <textarea ref={newPostInfo}></textarea>
        <br />
        <button onClick={addPost}>ADD</button>
      </div>
    </div>
  );
};

export default Dialogs;
