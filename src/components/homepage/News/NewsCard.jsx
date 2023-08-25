import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const NewsCard = () => {
  return (
    <div>
    <Splide 
    options={{
        pagination:false,
        perPage:4,
        rewind:true,
        arrows:true,
        width:'100vw',

        breakpoints: {
            1440:{
              perPage: 3,
            },
            640: {
                perPage: 1,
            },
            900: {
                perPage: 2,
            },
            // 400: {
            //   perPage:1,
            // }
          }
    }}
    >
<SplideSlide>
    <div className="news-card">
        <img src='https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.</h3>
    </div>
</SplideSlide>
<SplideSlide>
    <div className="news-card">
        <img src='https://images.pexels.com/photos/15663483/pexels-photo-15663483/free-photo-of-man-throwing-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.</h3>
    </div>
</SplideSlide>
<SplideSlide>
    <div className="news-card">
        <img src='https://images.pexels.com/photos/18022537/pexels-photo-18022537/free-photo-of-parrot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.</h3>
    </div>
</SplideSlide>
<SplideSlide>
    <div className="news-card">
        <img src='https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.</h3>
    </div>
</SplideSlide>
<SplideSlide>
    <div className="news-card">
        <img src='https://images.pexels.com/photos/17986330/pexels-photo-17986330/free-photo-of-portrait-of-a-man-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic eaque qui blanditiis culpa ipsum.</h3>
    </div>
</SplideSlide>
    </Splide>
    </div>
  )
}

export default NewsCard