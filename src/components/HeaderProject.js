import React from "react";
import { Link } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HeaderProject({ setShowFirst, setShowParagraph }) {
  return (
    <div className="project">
      <nav className="navbar_pro navbar-expand-lg">
        <div className="container pt-4">
          <h2>Get To Know</h2>
          <p>My Name is Aml, I Live in Asher of Ramadan, this is my 5th project.</p>

          <div className="linkPro collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto d-flex justify-content-between mb-2 mb-lg-0">
              <li className="nav_item nav-item1" tabIndex="0">
                <Link
                  to="first"
                  className="nav_link"
                  smooth={true}
                  duration={500}
                  onClick={() => setShowFirst(true)}
                >
                  1st Section
                </Link>
              </li>
              <li className="nav_item" tabIndex="0">
                <Link
                  to="second"
                  className="nav_link"
                  smooth={true}
                  duration={500}
                  onClick={() => setShowFirst(false)}
                >
                  2nd Section
                </Link>
              </li>
              <li className="nav_item nav-item2" tabIndex="0">
                <Link
                  to="third"
                  className="nav_link"
                  smooth={true}
                  duration={500}
                  onClick={() => setShowParagraph(true)}
                >
                  3rd Section
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderProject;
