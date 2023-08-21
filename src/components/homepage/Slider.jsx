import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  return (
    <>
      <img src="https://www.netfund.go.ke/wp-content/uploads/2023/06/netund-banner-3.jpg" />
      <div className="slider-div">
        <Splide
          aria-label="My Favorite Images"
          options={{
            pagination: false,
            rewind: true,
          }}
        >
          <SplideSlide className="splide-slide">
            <img
              src="https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 1"
              />
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptas a.</h3>
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <img
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
