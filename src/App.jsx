import './App.css';
import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Content from './components/content';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/music/music';
import Messages from './components/messages/messages';
import Settings from './components/settings/settings';

const App = () => {
  const classes = {
    p: 'Profile',
    m: 'Message',
    mu: 'Music',
    n: 'News',
    s: 'Settings',
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav classes={classes} />
        <div className="app-wrapper-dialogs">
          <Routes>
            <Route path="/profile" element={<Content />} />
            <Route exact path="/dialogs/*" element={<Dialogs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
