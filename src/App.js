import React from 'react';
import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer.jsx';
import NavBar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Booking/>
     
     <Footer/>
    </div>
  );
}

export default App;
