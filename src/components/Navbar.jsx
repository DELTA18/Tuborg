import React from 'react'
import Logo from '../assets/Tuborg-Logo-2008.png'

const Navbar = () => {
  return (
    <div className='navbar_pos'>
    <div className="navbar">
      <img src={Logo} className="logo"></img>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">About</a></li>
          <li><a href="#about">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar