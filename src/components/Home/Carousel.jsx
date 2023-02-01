import React, { useEffect, useState } from 'react';
import food1 from '../../images/food1.jpg';
import food2 from '../../images/food7.jpg';
import food3 from '../../images/food3.jpg';
import food4 from '../../images/food6.jpg';
import food5 from '../../images/food5.jpg';
import '../../styles/Home/Carousel.css';

function Carousel() {

    const slides = [
       {image: food1},
       {image: food2},
       {image: food3},
        {image: food4},
       {image: food5},
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const prev = ()=>{
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
        setCurrentSlide(index)
    }

    const next = ()=>{
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

useEffect(()=>{
    const slideInterval = setInterval(()=>{
       setCurrentSlide(currentSlide=> currentSlide < slides.length -1? currentSlide+1 : 0)
    },10000)

    return ()=> clearInterval(slideInterval)
})
  return (
    <div className="container">

        <div className="carousel">
            <div className="carousel-inner" style={{transform: `translateX(${-currentSlide * 100}%)`}}>

                {slides.map((slide, index)=>(
                    <div className="carousel-item" key={index}>
                    <img className='img' alt='food img' src={slide.image} />
                    </div>
                ))}
            </div>
        </div>
        <div className='controller'>
            <button className="carousel-control left" onClick={prev}>Prev</button>
            <button className="carousel-control right" onClick={next}>Next</button>
        </div>
    </div>
  )
}

export default Carousel;