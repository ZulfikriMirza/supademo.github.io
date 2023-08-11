import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import Landing from './landing';
import Demo from './demo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Container'>
      <Navbar />
      <Landing />
      <Demo />
    </div>

  </React.StrictMode>
);

