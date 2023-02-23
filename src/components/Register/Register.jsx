import React from "react";
import "../../styles/Register.css"

import { useNavigate } from "react-router-dom";

function Register() {
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();

    const handelSubmit =  (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const email = data.get("email");
        const password = data.get("password");
        const confirmPassword = data.get("confirmPassword");
        console.log(firstName, lastName, email, password, confirmPassword);
        if(password !== confirmPassword) return alert("Password and Confirm Password must be same");

        try {
             fetch("https://mern-restaurant-backend.onrender.com/api/sginup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    setInterval(() => {
                        navigate("/login");
                    }
                    , 2000);
                }
                );
        } catch (error) {
            console.log(error);
        }
    }

    const input =[
        {
            type: "text",
            name: "firstName",
            label: "First Name",
        },
        {
            type: "text",
            name: "lastName",
            label: "Last Name",
        },
        {
            type: "email",
            name: "email",
            label: "Email",
        },
        {
            type: "password",
            name: "password",
            label: "Password",
        },
        {
            type: "password",
            name: "confirmPassword",
            label: "Confirm Password",
        },
    ];
    return (
        <main className="mainRegister">
            <div className="containerForm">
                <p className="headingRegister">Sign up</p>
                <form action="" className="registerForm" onSubmit={handelSubmit}>
                    {input.map((item, index) => (
                        <div key={index} className="floating_group">
                            <input type={item.type} name={item.name} className="inputRegister" id={"registerInput" + index} required/>
                            <label className="labelRegister" htmlFor={"registerInput" + index} >{item.label}</label>
                        </div>
                    ))
                            }
                    <button type="submit" className="buttonRegister">Submit</button>
                    {user && <p style={{ color: "red" }}>{user.message}</p>}
                </form>
            </div>
        </main>
    )
}

export default Register;