import { useState } from "react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import "./components/homepage/homepage.scss";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./components/homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './Pages/About/aboutUs';

function App() {
  return (
    <>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<HomePage />} exact path="/" />
            <Route element={<AboutUs/>} exact path="/aboutUs" /> *
            
          </Routes>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
