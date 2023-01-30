import React from 'react'
import Carousel from './Carousel.jsx';
import Offer from './Offer.jsx';
import Booking from './Booking.jsx';
import Footer from './Footer.jsx';

function Home() {
  return (
    <div>
     
      <Carousel/>
      <Booking/>
      <Offer/>
      <Footer/>
    </div>
  )
}

export default Home