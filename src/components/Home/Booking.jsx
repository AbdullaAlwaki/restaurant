import React from "react";
import "../../styles/Home/Booking.css";

function Booking() {
    const booking = [
        {
            type: "text",
            name: "name",
            label: "Name",
        },
        {
            type: "number",
            name: "amountOfPerson",
            label: "How many person?",
        },
        {
            type: "time",
            name: "time",
        },
        {
            type: "date",
            name: "date",
        },
    ];
    return (
        <div className="booking">
            <h2 className="headingBook">Book a table now</h2>
            <div className="container_booking">
                <form className="formBooking">
                    {booking.map((item, index) => (
                       <div key={index} className="floating_group">
                            <input type={item.type} name={item.name} className="inputBook" required/>
                            <label className="labelBook">{item.label}</label> 
                        </div>
                    ))}
                </form>
            {/*reservation button*/}
            <button type="submit" className="buttonBook">Book now</button>
            </div>
        </div>
    );
}

export default Booking;