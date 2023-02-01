import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/MERN.svg";
import login from "../images/login.png";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const activeStyle = {color: "yellow"}
  
  return (
    <>
    <nav className="navbar">
      <img className="logo-img" src={logo} alt="logo-pic" />
      <button className="hamburger" onClick={()=>{
        setIsNavExpanded(!isNavExpanded);
      }}>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={
        isNavExpanded? "navbar-menu expanded" : "navbar-menu"
      }>
        <ul>
          <li>
            {/* <a href="/home">Home</a> */}
            <NavLink 
            style={({isActive}) => (isActive? activeStyle : undefined)}
            to='/'>Home</NavLink>
            </li>
          <li>
            {/* <a href="/about">About</a> */}
            <NavLink 
            style={({isActive}) => (isActive? activeStyle : undefined)}
            to='/about'>About</NavLink>
            </li>
          <li>
            {/* <a href="/menu">Menu</a> */}
            <NavLink 
            style={({isActive}) => (isActive? activeStyle : undefined)}
            to='/menu'>Menu</NavLink>
            </li>
          <li>
            {/* <a href="/services">Services</a> */}
            <NavLink 
            style={({isActive}) => (isActive? activeStyle : undefined)}
            to='/services'>Services</NavLink>
          </li>
          <li>
            {/* <a href="/contact">Contact Us</a> */}
            <NavLink 
            style={({isActive}) => (isActive? activeStyle : undefined)}
            to='/contact'>Contact</NavLink>
          </li>
          <li>
            {/* <a href="/addDishes">addishes Us</a> */}
            <NavLink
            style={({isActive}) => (isActive? activeStyle : undefined)}
            to='/addDishes'>Add Dishes</NavLink>
          </li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li>
            <a href="/signin">Sign In</a>
            </li>
          <li className="login-pic">
            <a href="/register"><img className="login-img" src={login} alt="login-icon" /></a>
            </li>
        </ul>
      </div>
    </nav>
    
    </>
  );
}

export default NavBar;