import React from 'react';
// Import the react-responsive-carousel package from node moduls
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Avatar imports
import Avatar from "../Avatar.webp";
 
const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      // to not show pictures of avatars
      showThumbs={false}
      // will hide the numbers of page
      showStatus={false}
      // will show pics automatically with 3sec delay
      autoPlay={true}
      interval={3000}

    >
      <>
        <img src={Avatar} alt="Avatar John Do1"/>
        <div className="myCarousel">
          <h3>John Do1</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo odit quas, voluptates iure eaque ab molestias fugiat velit! Officiis, fugit.</p>
        </div>
      </>
      <>
        <img src={Avatar} alt="Avatar John Do2"/>
        <div className="myCarousel">
          <h3>John Do2</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo odit quas, voluptates iure eaque ab molestias fugiat velit! Officiis, fugit.</p>
        </div>
      </>
      <>
        <img src={Avatar} alt="Avatar John Do3"/>
        <div className="myCarousel">
          <h3>John Do3</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo odit quas, voluptates iure eaque ab molestias fugiat velit! Officiis, fugit.</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel;
