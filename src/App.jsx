import './App.css';
import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Content from './components/content';



const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Nav message='!'/>
      <Content/>
    </div> 
  );
};

export default App;
