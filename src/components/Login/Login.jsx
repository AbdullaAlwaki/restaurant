import React from "react";
import "../../styles/Login.css";
import loginLogo from "../../images/login.png";
import axios from "axios";

import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [res, setRes] = React.useState();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const dataAll ={
  email :form.get("email"),
    password :form.get("password")}
    try {
      const res = await axios.post(
        "/api/signIn",
       dataAll,
        {
          baseURL:'https://mern-restaurant-backend.onrender.com',
          headers: {
            "Content-Type": "application/json",
            withCredentials : true
          },
        }
      );
      // fetch("http://localhost:10000/api/signIn", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     credentials: "include",
      //   },
      //   body: JSON.stringify(dataAll),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
        //     console.log(data)})
        //   .catch((err) => console.log(err));
        const data1 =  res.data
        
        // save the cookie in the browser
        //document.cookie = `token=${data.token}; path=/; max-age=3600`;
        
        

      console.log(data1);
      if (res?.message) {
        setRes(res.message);
        localStorage.setItem("token", res.token);
        console.log(res.user);
        setInterval(() => {
          navigate("/");
        }, 2000);
      } else {
        setRes(res?.error);
      }
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
        {res && <p className="textLogin">{res}</p>}
      </div>
    </main>
  );
}

export default Login;
