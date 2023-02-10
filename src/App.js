import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact';
import AddDishes from './Admin/AddDishes.jsx';
import Register from './components/Register/Register';
import Order from './components/Order';
import Context from './components/Context/context';

function App() {
  return (
    <div className="App">
    <Context>
     <NavBar/>
      <div className='main-container'>
       <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/restaurant_frontend' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/myorder' element={<Order/>}/>

        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/addDishes' element={<AddDishes/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
      </div></Context>
    <Footer/>
    </div>
  );
}

export default App;
