import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Dishes from "./components/dishes/Dishes";
import BookTable from "./components/Table";
import Contact from "./components/Contact";

import "./style/Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard_container">
      
      <Nav />
      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route path="Dishes" element={<Dishes />} />
        <Route path="Table" element={<BookTable />} />
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default Dashboard;
