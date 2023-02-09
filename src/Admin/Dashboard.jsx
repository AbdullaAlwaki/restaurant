import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Dishes from "./components/dishes/Dishes";
import Table from "./components/table/Table";
import Contact from "./components/contact/Contact";

import "./style/Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard_container">
      
      <Nav />
      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route path="Dishes" element={<Dishes />} />
        <Route path="Table" element={<Table />} />
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default Dashboard;
