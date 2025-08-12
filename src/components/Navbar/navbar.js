import React from 'react'

import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';



const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <Link
          to="home"  // Matches id="home" in Intro
          smooth={true}
          duration={500}
          offset={-80} // so it doesn't hide under navbar
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          to="projects" // Matches id="projects" in Projects.js
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Projects
        </Link>

        <Link
          to="experience" // Matches id="experience" in Experience.js
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;

