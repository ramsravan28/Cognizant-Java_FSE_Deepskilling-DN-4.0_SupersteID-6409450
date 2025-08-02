// src/App.js
import React, { useState } from 'react';
import './App.css';
import { LoginButton, LogoutButton, Greeting } from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </header>
    </div>
  );
}

export default App;