import React from "react";
import "../../styles/Home/Booking.css";

function Booking() {
  const [response, setResponse] = React.useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      persons: form.get("person"),
      date: form.get("date"),
      time: form.get("time"),
    };
    try {
      const response = await fetch(
        "https://mern-restaurant-backend.onrender.com/api/table",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      setResponse(result);
    } catch (error) {
      console.log(error);
    }
  };
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
                <form className="formBooking" action="" method="post" onSubmit={handleSubmit} >
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
            {response ? <h1>{response.message}</h1> : null}
      {response ? <p>{response.error}</p> : null}
        </div>
    );
}

export default Booking;
