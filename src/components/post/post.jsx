import React from 'react';
import  p from './post.module.css'


const Post=(props)=>{

    return(
        <div className={p.post}>
          <img className= {p.avatar} src="https://i.imgur.com/S1oE8qI.jpg" alt="" />
          <p className={`${p.red} ${p.font}`}>{props.text}</p>
        </div>
    )
}

export default Post