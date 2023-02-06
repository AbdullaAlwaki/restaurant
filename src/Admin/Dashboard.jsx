import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDishes from "./components/AddDishes";
import BookTable from "./components/BookTable";
import Nav from "./components/Nav";
import "./style/Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard_container">
      
      <Nav />
      <Routes>
        <Route path="/" element={<AddDishes />} />
        <Route path="AddDishes" element={<AddDishes />} />
        <Route path="BookTable" element={<BookTable />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
