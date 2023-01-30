import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Footer from './components/Footer.jsx';
// import Services from './pages/Services/Services.jsx';

function App() {
  return (
    <div className="App">
      
     <NavBar/>
     {/* <Carousel/>
     <Booking/>
     <Offer/>
      */}
      <div className='main-container'>
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        {/* <Route path='/services' element={<Services/>}/> */}
       </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
