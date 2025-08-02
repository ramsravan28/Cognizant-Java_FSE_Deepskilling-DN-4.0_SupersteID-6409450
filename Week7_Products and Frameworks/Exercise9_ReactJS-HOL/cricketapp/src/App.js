import React from 'react';
import ListofPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  return (
    <div>
      <h1>Cricket App</h1>
      <ListofPlayers />
      <IndianPlayers />
    </div>
  );
}

export default App;
