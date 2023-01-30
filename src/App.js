import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
// import Booking from './components/Booking';
// import Footer from './components/Footer.jsx';
// import Carousel from './components/Carousel.jsx';
import NavBar from './components/Navbar.jsx';
// import Offer from './components/Offer';
// import Menu from './components/Menu/Menu.jsx';
import Home from './pages/Home/Home.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Services from './pages/Services/Services.jsx';

function App() {
  return (
    <div className="App">
     <NavBar/>
      <div className='main-container'>
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/services' element={<Services/>}/>
  
       </Routes>
      </div>

     {/* <Carousel/>
     <Booking/>
     <Offer/>
     <Footer/>
     <Menu/> */}

     
    </div>
  );
}

export default App;
