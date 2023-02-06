import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Admin_nav_div">
      <ul className="Admin_nav_ul">
        <li className="Admin_nav_li">
          <NavLink className="Admin_Nav" to="/Dashboard/AddDishes">
            Add Dishes
          </NavLink>
        </li>
        <li className="Admin_nav_li">
        <NavLink className="Admin_Nav" to="/Dashboard/BookTable">
          Book Table
        </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
