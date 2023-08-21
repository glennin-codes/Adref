import React from 'react'
import mainLogo from '../../assets/icon.jpg'
const Navbar = () => {
  return (
    <div className='main-navbar'>
        <div className="nav-icon"><img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/Netfund_Logo_23.jpg' alt='main-logo'/></div>
        <div className="nav-items">
            <a href=''>
            <p>Home</p>
            </a>
            <a href=''>
            <p>About Us</p>
            </a>
            <a href=''>
            <p>Downloads</p>
            </a>
            <a href=''>
            <p>Blogs</p>
            </a>
            <a href=''>
            <p>Contact Us</p>
            </a>
            <a href=''>
            <p>Donate</p>
            </a>
        </div>
    </div>
  )
}

export default Navbar