import React from 'react'
import Events from './Events/Events'
import News from './News/News'
import Publications from './Publications'
import Video from './Video'
import Sponsors from './Sponsors/Sponsors'
import Slider from './Slider/Slider'

const HomePage = () => {
  return (
    <div>
        <Slider/>
        <Events/>
        <News/>
        {/* <Publications/> */}
        {/* <Video/> */}
        <Sponsors/>
    </div>
  )
}

export default HomePage