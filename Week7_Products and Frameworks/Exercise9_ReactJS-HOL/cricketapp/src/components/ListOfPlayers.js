import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 85 },
    { name: 'Gill', score: 45 },
    { name: 'Pant', score: 60 },
    { name: 'Hardik', score: 78 },
    { name: 'Jadeja', score: 50 },
    { name: 'Shami', score: 30 },
    { name: 'Ashwin', score: 55 },
    { name: 'Kohli', score: 99 },
    { name: 'Rahul', score: 25 },
    { name: 'Bumrah', score: 80 }
  ];

  const filtered = players.filter(p => p.score >= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default ListofPlayers;
