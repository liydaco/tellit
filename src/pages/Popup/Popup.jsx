import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <span className="text-2xl text-purple-200 "> Welcome to Tellit</span>
        </a>
      </header>
    </div>
  );
};

export default Popup;
