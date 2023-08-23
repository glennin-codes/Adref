import React from 'react'
import Events from './Events/Events'
import News from './News/News'
import Publications from './Publications'
import Video from './Video/YoutubeApi'
import Sponsors from './Sponsors/Sponsors'
import Slider from './Slider/Slider'
import YouTubeAPI from './Video/YoutubeApi'

const HomePage = () => {
  return (
    <div>
        <Slider/>
        <Events/>
        <News/>
        {/* <Publications/> */}
        <YouTubeAPI apiKey="AIzaSyCEXtTZiP86G5IMJpHmmEunQV6CVWuPdOI"/>
        <Sponsors/>
    </div>
  )
}

export default HomePage