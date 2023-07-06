import React from 'react';
import './nav.css'

let classes={
  'p':'Profile',
  'm':'Messages',
  'mu':'Music'
}

const Nav = (props) =>{

    return(
        <nav className='nav'>
        <ul>
         

          <li><a href="">{classes.p}</a></li>
          <li><a href="">{classes.m}</a></li>
          <li><a href="">{classes.mu}</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Settings</a></li>
        </ul>
      </nav>
    )
}

export default Nav