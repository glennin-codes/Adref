import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./Slider.css"; 
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {  useTheme, useMediaQuery } from "@chakra-ui/react";

const Slider = () => {
  const theme = useTheme();
  const [isXsScreen]=useMediaQuery("(max-width: 576px)");
  console.log(isXsScreen);
  const splideRef = useRef(null); // Ref to the Splide instance

  const handlePrevSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("prev"); // Navigate to the previous slide
    }
  };

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("next"); // Navigate to the next slide
    }
  }
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
            interval: 1000,
            pauseOnHover: true,
            resetProgress: false,
            lazyLoad: true,

          }}
        >
          <SplideSlide    ref={splideRef} className="splide-slide">
          <div className="slide-content">
            {isXsScreen
            ?<h1>EcoSystem Restoration</h1>:
            <>
            <h1>EcoSystem Restoration</h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas a.</h3>
            </>
          }
              
            </div>
            <img
            className="slider-image"
              src="https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
            />
              <div className="slider-arrows">
              <div className="custom-arrow custom-arrow--prev" onClick={handlePrevSlide}>
              <FiChevronLeft size={24}/> 
              </div>
              <div className="custom-arrow custom-arrow--next" onClick={handleNextSlide}>
              <FiChevronRight size={24}/>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide    ref={splideRef} className="splide-slide">
          <div className="slide-content">
             {isXsScreen?
              <h1>Circular economy</h1> :
              <>
                <h1>Circular economy</h1>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas a.</h3>
              </>
            
             }
            </div>
            <img
             className="slider-image"
              src="https://images.pexels.com/photos/952632/pexels-photo-952632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 2"
            />
             <div className="slider-arrows">
              <div className="custom-arrow custom-arrow--prev" onClick={handlePrevSlide}>
              <FiChevronLeft size={24}/> 
              </div>
              <div className="custom-arrow custom-arrow--next" onClick={handleNextSlide}>
              <FiChevronRight size={24}/>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Slider;
