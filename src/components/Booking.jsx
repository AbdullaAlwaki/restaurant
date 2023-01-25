import React from "react";
import "../styles/Booking.css";

function Booking() {
    return (
        <div className="booking">
            <h2>Book a table now</h2>
            <div className="form">
            {/*name*/}
            <input type="text" placeholder="Name"/>
            {/*number of person*/}
            <input type="number" placeholder="How many person?"/>
            {/*time for booking */}
            <input type="time" placeholder="What time?" min={"18:00"} />
            {/*day for booking*/}
            <input type="date" />
            {/*reservation button*/}
            <button type="submit">Book now</button>
            </div>
        </div>
    );
}

export default Booking;