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
        "https://mern-restaurant-backend.onrender.com/api/bookTable",
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
  return (
    <div className="booking">
      <h2 className="headingBook">Book a table now</h2>
      <form className="form" action="" method="post" onSubmit={handleSubmit}>
        {/*name*/}
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="inputBook"
        />
        {/*number of person*/}
        <input
          type="number"
          placeholder="How many person?"
          name="person"
          className="inputBook"
        />
        {/*time for booking */}
        <input
          type="time"
          placeholder="What time?"
          name="time"
          className="inputBook"
        />
        {/*day for booking*/}
        <input type="date" name="date" className="inputBook" />
        {/*reservation button*/}
        <button type="submit" className="buttonBook">
          Book now
        </button>
      </form>
      {response ? <h1>{response.message}</h1> : null}
      {response ? <p>{response.error}</p> : null}
    </div>
  );
}

export default Booking;
