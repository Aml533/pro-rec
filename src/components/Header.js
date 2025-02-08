import React from "react" ;
import {  NavLink } from "react-router-dom" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link} from "react-scroll";


function Header(){
    return(

    <div className="header_div">
    <nav className="navTitleHeader navbar navbar-expand-lg">
      <div className="container">
        <h2 className="h2_header">LOGO</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="padges_header collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item" tabIndex="0">
            <Link to="home" className="nav-link" smooth={true} duration={500}>
            Home
          </Link>
            </li>
            <li className="nav-item" tabIndex="0">
            <Link to="skills" className="nav-link" smooth={true} duration={500}>
            Skills
          </Link>
            </li>
            <li className="nav-item" tabIndex="0">
            <Link to="projects"className="nav-link" smooth={true} duration={500}>
            Projects
          </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <span className="border_icon me-2">
              <NavLink to="https://www.linkedin.com/in/amal-yasser-346643322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
            </span>
            <span className="border_icon me-2">
              <NavLink to=""><FontAwesomeIcon icon={faFacebookF} /></NavLink>
            </span>
            <span className="border_icon me-2">
              <NavLink to=""><FontAwesomeIcon icon={faInstagram} /></NavLink>
            </span>

            <button className="btn_header ">Let's Connect</button>
          </div>
        </div>
      </div>
    </nav>
    <div className=""></div>
  </div>
    )
    
}
export default Header;