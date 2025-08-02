// src/Login.js
import React, { useState } from 'react';

// Login and Logout button components [cite: 18]
function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={{ width: '150px', height: '60px', fontSize: '20px' }}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={{ width: '150px', height: '60px', fontSize: '20px' }}>
      Logout
    </button>
  );
}

// Greeting components for different user states
function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Greeting component that conditionally renders based on isLoggedIn prop [cite: 18]
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export { LoginButton, LogoutButton, Greeting };