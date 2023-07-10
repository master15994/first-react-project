import React from 'react';
import Post from './post/post';
import Info from './info';

const MyPost = () => {
  const newPostEi = React.createRef();

  let addPost = () => {
    let text = newPostEi.current.value;

    alert(text);
  };

  return (
    <div>
      <div>
        <textarea placeholder="Write here" ref={newPostEi}></textarea>
        <br></br>
        <button onClick={addPost}>Add post</button>
      </div>
      <Info text="@=>" image="https://i.imgur.com/S1oE8qI.jpg" />
      <Post text="Hey Jack" age="41" />
      <Post text="Hey Mike" age="24" />
      <Post text="Hey Kate" age="13" />
      <Post text="Hey Ruslan" age="31" />
    </div>
  );
};

export default MyPost;
