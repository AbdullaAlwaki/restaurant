import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Admin_nav_div">
      <ul className="Admin_nav_ul">
        <li className="Admin_nav_li">
          <NavLink className="Admin_Nav" to="/Dashboard/Dishes">
            Dishes
          </NavLink>
        </li>
        <li className="Admin_nav_li">
        <NavLink className="Admin_Nav" to="/Dashboard/Table">
          Table
        </NavLink>
        </li>
        <li>
        <NavLink className="Admin_Nav" to="/Dashboard/Contact">
          Contact
        </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
