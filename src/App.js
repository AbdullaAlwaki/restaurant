import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login";
import Dashboard from "./Admin/Dashboard.jsx";
import Cart from "./components/Cart";
import { dataContext } from "./components/Context/context";
import Bill from "./components/Order/Bill";
import axios from "./util/axios.config";

function App() {
  const { dispatch } = React.useContext(dataContext);
  React.useEffect(() => {
    (async () => {
      const res = await axios(`/api/Dishes`);
console.log(res.data);
      dispatch({ type: "MENU", payload: res.data.dishes });
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/myOrder" element={<Cart />} />
          <Route path="/Bill" element={<Bill />} />
          {/* Route Dashboard */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          <Route path="*" element={<h1>404 not found </h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
