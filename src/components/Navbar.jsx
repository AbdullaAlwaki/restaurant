import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import "../styles/Navbar.css";
import logo from "../images/MERN.svg";
import { dataContext } from "./Context/context";

function NavBar() {
  const state = useContext(dataContext);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const activeStyle = { color: "yellow" };

  return (
    <>
      <nav className="navbar">
        <img className="logo-img" src={logo} alt="logo-pic" />
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
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
        <div className={isNavExpanded ? "navbar-menu expanded" : "navbar-menu"}>
          <ul>
            <li>
              {/* <a href="/home">Home</a> */}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* <a href="/about">About</a> */}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              {/* <a href="/menu">Menu</a> */}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              {/* <a href="/services">Services</a> */}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              {/* <a href="/contact">Contact Us</a> */}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              {/* Dashboard */}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="login">
          <ul>
            <li>
              <Link className="myOrder_link" to="/myorder">
              {<FaShoppingCart />}
                              {state}
              </Link>
            </li>
            <li>
              <NavLink to="/Login">Sign In</NavLink></li>
            <li className="login-pic">
              <NavLink to="/register">
                <svg
                  className="login-svg"
                  fill="#ffffff"
                  height="35px"
                  width="35px"
                  viewBox="0 0 402.161 402.161"
                >                  
                          <path d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151 c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151 C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616 c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355 C256.436,151.824,230.372,192.029,201.08,192.029z" />
                          <path d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292 s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052 c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099 c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512 C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64 c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01 c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15 c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z" />
                          <path d="M302.806,352.372H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5 C310.307,355.73,306.948,352.372,302.806,352.372z" />
                          <path d="M302.806,387.161H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5 C310.307,390.519,306.948,387.161,302.806,387.161z" />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
