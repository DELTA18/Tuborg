import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar_pos'>
    <div className="navbar">
      <div className="logo">Tuborg</div>
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