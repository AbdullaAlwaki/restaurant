import React from "react";
import "../../styles/Login.css"
import loginLogo from "../../images/login.png";

import { NavLink } from "react-router-dom";

function Login() {
    return (
        <main className="mainLogin">
            <div className="containerLogin">
                <p className="headingLogin">Login</p>
                <img src={loginLogo} alt="login logo" className="loginImg"/>
                <form action="" className="loginForm">
                    <div className="floating_group">
                        <input type="email" name="email" className="inputLogin" id="loginEmail" required/>
                        <label className="labelLogin" for="loginEmail">Email</label>
                    </div>
                    <div className="floating_group">
                        <input type="password" name="password" className="inputLogin" id="loginPassword" required/>
                        <label className="labelLogin" for="loginPassword">Password</label>
                    </div>
                    <button type="submit" className="buttonLogin">Login</button>
                </form>
                <p className="textLogin">If you have no account yet, <NavLink to="/register">register</NavLink> now!</p>
            </div>
        </main>
    )
}

export default Login;