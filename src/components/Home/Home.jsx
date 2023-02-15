import React from "react";
import Carousel from "./Carousel.jsx";
import Offer from "./Offer.jsx";
import Booking from "./Booking.jsx";
import FavDishes from "./Fav.dishes.jsx";

function Home() {

  return (
    <div>
      <Carousel />
      <Booking />
      <Offer />
      <FavDishes/>
    </div>
  );
}

export default Home;
