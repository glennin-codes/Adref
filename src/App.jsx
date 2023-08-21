import { useState } from 'react'
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

import './components/homepage/homepage.scss'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Slider from './components/homepage/Slider'
import HomePage from './components/homepage/HomePage';

function App() {
  
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
