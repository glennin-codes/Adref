import React from 'react'
import Events from './Events/Events'
import News from './News/News'
import Publications from './Publications'
import Video from './Video/YoutubeApi'
import Sponsors from './Sponsors/Sponsors'
import Slider from './Slider/Slider'
import YouTubeAPI from './Video/YoutubeApi'
import ImagesCardGrid from './Impact/CardsImages'

const images = [
  { src: '/images/teams.png?url', title: 'Ngo meeting' },
  { src: '/images/Team.webp?url', title: 'The content of the file is newer.' },
  { src: 'https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Majestic Mountains dfwe' },
  { src: 'https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Majestic Mountains dfwe' },

];
const HomePage = () => {
  return (
    <div>
        <Slider/>
        <Events/>
        <News/>
     
        <YouTubeAPI apiKey="AIzaSyCEXtTZiP86G5IMJpHmmEunQV6CVWuPdOI"/>
        <ImagesCardGrid images={images}/>
        <Sponsors/>
    </div>
  )
}

export default HomePage