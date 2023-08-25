import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const SponsorCard = () => {
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
              perPage: 4,
            },
            640: {
                perPage: 2,
            },
            900: {
                perPage: 3,
            },
            // 400: {
            //   perPage:1,
            // }
          }
    }}
    >
<SplideSlide>
    <div className="sponsor-card">
        <img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/hydrobox-1.jpg'/>
        </div>
</SplideSlide>
<SplideSlide>
    <div className="sponsor-card">
        <img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/cafe-1.jpg'/>
        </div>
</SplideSlide>
<SplideSlide>
    <div className="sponsor-card">
        <img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/council-of-gorvernors-1.jpg'/>
        </div>
</SplideSlide>
<SplideSlide>
    <div className="sponsor-card">
        <img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/afdb-1.jpg'/>
        </div>
</SplideSlide>
<SplideSlide>
    <div className="sponsor-card">
        <img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/absa-1.jpg'/>
        </div>
</SplideSlide>
    </Splide>
    </div>
  )
}

export default SponsorCard