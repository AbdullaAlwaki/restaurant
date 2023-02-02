import React from "react";
import "../../styles/Home/Booking.css";

function Booking() {
    return (
        <div className="booking">
            <h2 className="headingBook">Book a table now</h2>
            <div className="form">
            {/*name*/}
            <input type="text" placeholder="Name" className="inputBook"/>
            {/*number of person*/}
            <input type="number" placeholder="How many person?" className="inputBook"/>
            {/*time for booking */}
            <input type="time" placeholder="What time?" className="inputBook"/>
            {/*day for booking*/}
            <input type="date" className="inputBook" />
            {/*reservation button*/}
            <button type="submit" className="buttonBook">Book now</button>
            </div>
        </div>
    );
}

export default Booking;