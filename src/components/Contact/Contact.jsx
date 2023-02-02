import React from "react";
import "../../styles/Contact.css"
import openingTimes from "../../images/openingTimes.png"
import address from "../../images/address.png"
import phoneNumber from "../../images/phoneNumber.png"
import email from "../../images/email.png"

function Contact() {
    return (
        <div className="containerContact">
            <div className="smallCon">
                <section className="smallConIns">
                    <img src={openingTimes} alt="opening_logo" className="logoContact"/>
                    <h3 className="headingIcon">Opening Times</h3>
                    <p className="textIcon">Monday - Friday: <br/> 09:00 - 22:00 <br/> Saturday & Sunday: <br/> 10:00 - 24:00</p>
                </section>
                <section className="smallConIns">
                    <img src={address} alt="adress_logo" className="logoContact"/>
                    <h3 className="headingIcon">Address</h3>
                    <p className="textIcon">Karl-Max-Straße 172 <br/> 12043 Berlin</p>
                </section>
                <section className="smallConIns">
                    <img src={phoneNumber} alt="phone_logo" className="logoContact"/>
                    <h3 className="headingIcon">Phone Number</h3>
                    <p className="textIcon">+49 30 12345678</p>
                </section>
                <section className="smallConIns">
                    <img src={email} alt="email_logo" className="logoContact"/>
                    <h3 className="headingIcon">Email</h3>
                    <p className="textIcon">mern@gmail.com</p>
                </section>
            </div>
            <div className="contactField">
                <p className="headingContact">Contact Us</p>
                <form action="" className="formContact">
                    {/*input name*/}
                    <div className="floating_group">
                        <input type="text" name="name" 
                    className="inputContact" required/>
                        <label>Your name</label>
                    </div>
                    {/*input email*/}
                    <div className="floating_group">
                        <input type="email" name="email" className="inputContact" required/>
                        <label>Your email</label>
                    </div>
                    {/*input message*/}
                    <div className="floating_group">
                        <textarea name="textfield" id="inputMessage" cols="30" rows="10" className="inputContact" required></textarea>
                        <label>Your message</label>
                    </div>
                    <button type="submit" className="buttonContact">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;