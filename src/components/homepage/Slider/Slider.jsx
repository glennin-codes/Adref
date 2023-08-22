import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./Slider.css"; // Import your CSS file for styling

const Slider = () => {
  return (
    <>
      <div className="slider-container">
        <Splide
          aria-label="My Favorite Images"
          options={{
            pagination: false,
            rewind: true,
            arrows: false, 
            autoplay: true,
            interval: 100,
            pauseOnHover: true,
            resetProgress: false,
            lazyLoad: true,

          }}
        >
          <SplideSlide className="splide-slide">
          <div className="slide-content">
              <h1>EcoSystem Restoration</h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas a.</h3>
            </div>
            <img
            className="slider-image"
              src="https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
           
          </SplideSlide>
          <SplideSlide className="splide-slide">
          <div className="slide-content">
              <h1>Circular economy</h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas a.</h3>
            </div>
            <img
             className="slider-image"
              src="https://images.pexels.com/photos/952632/pexels-photo-952632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 2"
            />
           
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Slider;
