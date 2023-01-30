import React from "react";
import Carousel from "./Carousel.jsx";
import Offer from "./Offer.jsx";
import Booking from "./Booking.jsx";

function Home() {
  return (
    <div>
      <Carousel />
      <Booking />
      <Offer />
    </div>
  );
}

export default Home;
