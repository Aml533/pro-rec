import React from "react";
import {  NavLink } from "react-router-dom" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Last(){
    return(
        <div className="total" id="skills">
            <div id="demo" class="carousel carousel_last slide" data-bs-ride="carousel">
                    <div class="row">
                        <div class="col">
                        <h5 className="title-2 h2_last">The rose is one of the most beautiful symbols of nature, representing beauty, and noble feelings.
                        </h5>
                        </div>
                        <div class="col">
                            <div class=" div_pro flex-wrap">
                                <input type="text" placeholder="Email Address " class="input-field " />
                            <div class="submit-button">Submit</div>
                            </div>
                        </div>
                    </div>

            </div>

            <div className="container d-flex justify-content-between pt-4">
                <div>
                    <h2 className="text-light">LOGO</h2>
                </div>
                <div>
                    <div className="d-flex align-items-center">
                        <span className="border_icon me-4 border_last">
                        <NavLink to="https://www.linkedin.com/in/amal-yasser-346643322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                        </span>
                        <span className="border_icon me-4 border_last">
                        <NavLink to=""><FontAwesomeIcon icon={faFacebookF} /></NavLink>
                        </span>
                        <span className="border_icon me-4 border_last">
                        <NavLink to=""><FontAwesomeIcon icon={faInstagram} /></NavLink>
                        </span>
                    </div>
                </div>
            </div>
            <div className="container pb-2">
            <p className="p_last text-end ">--aml yasser-- the end of React project I’m so Happy for that..... </p>
            </div>
        </div>
    )
}
export default Last;