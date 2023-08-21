import React from 'react'
import Slider from './Slider'
import Events from './Events'
import News from './News/News'
import Publications from './Publications'
import Video from './Video'
import Sponsors from './Sponsors/Sponsors'

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