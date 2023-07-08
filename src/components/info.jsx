import React from 'react';

const Information = props => {
  return (
    <div>
      <div>
        {props.image && <img src={props.image} alt="" />}
        <img src={props.image} alt="" />
        <p>Bek P. {props.text}</p>
        <p>Date of birth:02.05.1994 {props.text}</p>
        <p>City:Minsk {props.text}</p>
        <p>Education:BNTU {props.text}</p>
      </div>
    </div>
  );
};

const Info = props => {
  return (
    <div className="info">
      <Information text={props.text} image={props.image} />
    </div>
  );
};

export default Info;
