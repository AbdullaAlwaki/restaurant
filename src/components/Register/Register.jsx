import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import "../../styles/Register.css"

function Register() {
    return (
        <main className="mainRegister">
            <div className="containerForm">
                <p className="headingRegister">Sign up</p>
                <form action="" className="registerForm">
                    <div className="floating_group">
                        <input type="text" name="firstName" className="inputRegister" required/>
                        <label className="labelRegister">First Name</label>
                    </div>
                    <div className="floating_group">
                        <input type="text" name="lastName" className="inputRegister" required/>
                        <label className="labelRegister">Last Name</label>
                    </div>
                    <div className="floating_group">
                        <input type="email" name="email" id="" className="inputRegister" required/>
                        <label className="labelRegister">Email</label>
                    </div>
                    <div className="floating_group">
                        <input type="password" name="password" id="" className="inputRegister" required/>
                        <label className="labelRegister">Password</label>
                    </div>
                    <div className="floating_group">
                        <input type="password" name="password" id="" className="inputRegister" required/>
                        <label className="labelRegister">Confirm Password</label>
                    </div>
                    <button type="submit" className="buttonRegister">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Register;