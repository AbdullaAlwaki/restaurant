import React from "react";
import "../../styles/Contact.css"

function Contact() {
    return (
        <div>
            <div className="smallCon">
                <section className="openingCon">
                    <img src="" alt="" />
                    <h4>Opening Times</h4>
                    <p></p>
                </section>
                <section className="addressCon">
                    <img src="" alt="" />
                    <h4>Address</h4>
                    <p>Karl-Max-Straße 172, 12043 Berlin</p>
                </section>
                <section className="phoneCon">
                    <img src="" alt="" />
                    <h4>Phone Number</h4>
                    <p>+49 30 12345678</p>
                </section>
                <section className="mailCon">
                    <img src="" alt="" />
                    <h4>Email</h4>
                    <p>mern@gmail.com</p>
                </section>
            </div>
            <div className="contactField"></div>
        </div>
    )
}

export default Contact;