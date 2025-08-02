// src/App.js
import React from 'react';
import './App.css';
import officeImage from './office.png'; // <-- Add this line

// Sample data for a single office space
const office = {
  name: 'DBS',
  rent: 50000,
  address: 'Chennai',
  imageUrl: officeImage, // <-- Use the imported variable here
};

// Sample data for a list of office spaces
const officeSpaces = [
  { id: 1, name: 'DBS', rent: 50000, address: 'Chennai', imageUrl: officeImage }, // <-- Use the imported variable here
  { id: 2, name: 'ABC Office', rent: 75000, address: 'New York', imageUrl: officeImage },
  { id: 3, name: 'PQR Co-Working', rent: 45000, address: 'Bangalore', imageUrl: officeImage },
];

function App() {
  // Function to determine the color based on rent
  const getRentColor = (rent) => {
    return rent < 60000 ? 'red' : 'green';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Office Space , at Affordable Range</h1>

        {/* Displaying a single office space */}
        <div>
          <img src={office.imageUrl} alt="Office Space" style={{ width: '25%', height: '25%' }} />
          <h3>Name: {office.name}</h3>
          <h3 style={{ color: getRentColor(office.rent) }}>Rent: Rs. {office.rent}</h3>
          <h3>Address: {office.address}</h3>
        </div>

        <hr />

        {/* Displaying a list of office spaces */}
        <h2>More Office Spaces</h2>
        {officeSpaces.map((space) => (
          <div key={space.id} style={{ marginBottom: '20px' }}>
            <img src={space.imageUrl} alt="Office Space" style={{ width: '25%', height: '25%' }} />
            <h3>Name: {space.name}</h3>
            <h3>Rent: Rs. {space.rent}</h3>
            <h3>Address: {space.address}</h3>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;