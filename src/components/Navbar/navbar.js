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
          to="home"  
          smooth={true}
          duration={500}
          offset={-80} 
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          to="projects" 
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          Projects
        </Link>

        <Link
          to="experience" 
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

