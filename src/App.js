import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer.jsx';
import Services from './components/Services/Services.jsx';
import AddDishes from './Admin/AddDishes.jsx';

function App() {
  return (
    <div className="App">
      
     <NavBar/>
      <div className='main-container'>
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/addDishes' element={<AddDishes/>}/>
       </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
