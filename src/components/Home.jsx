import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import slide5 from '../images/slide5.jpeg';
import slide2 from '../images/slide2.jpeg';
import slide4 from '../images/slide4.jpg';
import '../styles/Home.css';


function Home() {
  return (
    <div className='carousel-wrapper' >
        
        <Carousel className='carousel' infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
         
             eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img className='img1' src={slide5} alt="carousel-image-1"  />
           
            <img className='img2' src={slide2} alt="carousel-image-2"  />
            
           
            <img className='img3' src={slide4} alt="carousel-image-3"  />
            
         
           
        </Carousel>
    </div>
  )
}

export default Home;