import React from 'react'
import mainLogo from '../../assets/icon.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <div className="nav-icon"><img src='https://www.netfund.go.ke/wp-content/uploads/2023/03/Netfund_Logo_23.jpg' alt='main-logo'/></div>
        <div className="nav-items">
            <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/aboutUs'>
            <p>About Us</p>
            </Link>
            <Link to='#'>
            <p>Downloads</p>
            </Link>
            <Link to='#'>
            <p>Blogs</p>
            </Link>
            <Link to='#'>
            <p>Contact Us</p>
            </Link>
            <Link to='#'>
            <p>Donate</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar