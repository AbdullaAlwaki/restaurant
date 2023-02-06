import React from "react";
import "../../styles/Register.css"

function Register() {
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
                <form action="" className="registerForm">
                    {input.map((item, index) => (
                        <div key={index} className="floating_group">
                            <input type={item.type} name={item.name} className="inputRegister" required/>
                            <label className="labelRegister">{item.label}</label>
                        </div>
                    ))
                            }
                    <button type="submit" className="buttonRegister">Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Register;