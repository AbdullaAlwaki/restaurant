import React from 'react';
import './App.css';
import Booking from './components/Booking';
import NavBar from './components/Navbar.jsx';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Booking/>
     <Offer/>
     
    </div>
  );
}

export default App;
