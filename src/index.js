import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import Landing from './landing';
import Demo from './demo';
import Reason from './reason';
import Advantage from './advantage';
import Team from './team';
import Trending from './trending';
import Question from './question';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Container'>
      <Navbar />
      <Landing />
      <Demo />
      <Reason />
      <Advantage />
      <Team />
      <Trending />
      <Question />
    </div>

  </React.StrictMode>
);

