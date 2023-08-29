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
import BlogList from "./Pages/Blogs/Blog";
import GalleryPage from "./Pages/Gallery/Gallery";
import DonationPage from "./Pages/Donation/Donation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_stripe_publishable_key");
const StripeWrappedDonationPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonationPage />
    </Elements>
  );
}
function App() {
  const stripePromise = loadStripe("your_stripe_publishable_key");
  return (
    <>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<HomePage />} exact path="/" />
            <Route element={<AboutUs/>} exact path="/aboutUs" /> 
            <Route element={<BlogList/>} exact path="/blogs" /> 
            <Route element={<GalleryPage/>} exact path="/gallery" />
            <Route element={<StripeWrappedDonationPage/>} exact path="/donation" />
         
            
          </Routes>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
