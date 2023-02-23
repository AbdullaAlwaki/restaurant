import React from "react";
import "../../styles/Login.css";
import loginLogo from "../../images/login.png";

import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [res, setRes] = React.useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    try {
      await fetch("https://mern-restaurant-backend.onrender.com/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setRes(data);
          localStorage.setItem("user", true);
          setInterval(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="mainLogin">
      <div className="containerLogin">
        <p className="headingLogin">Login</p>
        <img src={loginLogo} alt="login logo" className="loginImg" />
        <form action="" className="loginForm" onSubmit={handleChange}>
          <div className="floating_group">
            <input
              type="email"
              name="email"
              className="inputLogin"
              id="loginEmail"
              required
            />
            <label className="labelLogin" htmlFor="loginEmail">
              Email
            </label>
          </div>
          <div className="floating_group">
            <input
              type="password"
              name="password"
              className="inputLogin"
              id="loginPassword"
              required
            />
            <label className="labelLogin" htmlFor="loginPassword">
              Password
            </label>
          </div>
          <button type="submit" className="buttonLogin">
            Login
          </button>
        </form>
        <p className="textLogin">
          If you have no account yet, <NavLink to="/register">register</NavLink>{" "}
          now!
        </p>
        {res?.message && <p className="textLogin">{res.message}</p>}
      </div>
    </main>
  );
}

export default Login;
