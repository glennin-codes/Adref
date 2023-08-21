import React from "react";
import "../layout/layout.scss";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

const Footer2 = () => {
  return (
    <div>
      <footer>
        <div className='footer'>
          <div className='socials'>
            <div className='social_row'>
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsYoutube />
              </a>
              <a href="#">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <div className='row'>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className='row'>
            INFERNO Copyright © {new Date().getFullYear() } Inferno - All rights reserved 
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
