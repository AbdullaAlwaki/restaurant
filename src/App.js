import React from 'react';
import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer.jsx';
import NavBar from './components/Navbar.jsx';
import Offer from './components/Offer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Booking/>
     <Offer/>
     <Footer/>
    </div>
  );
}

export default App;
