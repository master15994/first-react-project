import React from 'react';
import Info from './info';
import Post from './post/post';


const Content = () =>{
    return(
        <div className='content'>
        <div>
        <img src="https://i.imgur.com/S1oE8qI.jpg" alt="" />
        </div>
        <Info text='@=>'/>
        <Post text='Hey Jack'/>
        <Post text='Hey Mike'/>
        <Post text='Hey Kate'/>
        <Post text='Hey Ruslan'/>
      </div>
    )
}

export default Content