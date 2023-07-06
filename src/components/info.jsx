import React from 'react';

const Info= (props)=>{
    return(
        <div className='info'>
          <img src="https://cdn.dribbble.com/users/1358284/screenshots/15604583/media/8ef93cd86ff0899b3cca1d1155779788.png?compress=1&resize=400x300&vertical=center" alt="" />
          <div>
          <p>Bek P. {props.text}</p>
          <p>Date of birth:02.05.1994 {props.text}</p>
          <p>City:Minsk {props.text}</p>
          <p>Education:BNTU {props.text}</p>
          </div>
        </div>
    )
}

export default Info