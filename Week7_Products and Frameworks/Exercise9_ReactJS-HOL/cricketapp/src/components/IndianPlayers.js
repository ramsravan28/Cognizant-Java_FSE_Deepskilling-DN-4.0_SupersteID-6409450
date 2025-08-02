import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Virat', 'Rohit', 'Hardik'];
  const Ranji = ['Pujara', 'Rahane', 'Jadeja'];

  const merged = [...T20, ...Ranji];
  const even = merged.filter((_, i) => i % 2 === 0);
  const odd = merged.filter((_, i) => i % 2 !== 0);

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {odd.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <hr />

      <h2>Even Players</h2>
      <ul>
        {even.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <hr />

      <h2>List of Players (merged)</h2>
      <ul>
        {merged.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
