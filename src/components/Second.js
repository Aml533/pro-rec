import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Second(){
    return(
        <div className="second">
        <div class="container second_pro">
            <div class="row">

                <div class="col-sm-6 second_pro_img">
                <img className="animated-image" src="/image/spring.jpg"></img>
                </div>
                <div class="col-sm-6">

                <h2>Get In Touch</h2>

                <form>
                <div class="row g-2">
                  <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control input_pro " placeholder="First Name" name="text"/>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control input_pro " placeholder="Last Name" name="pswd"/>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <input type="email" class="form-control input_pro" placeholder="Email Address" name="email"/>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <input type="text" class="form-control input_pro text-white" placeholder="Phone Number" name="text"/>
                  </div>

                  <div class="col">
                    <textarea class="form-control input_pro" placeholder="Massage" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div> 
                </div>
                <button type="button" class="btn btn-light mt-4 input_pro button_pro">Send</button>
                
              </form>
               

              </div>
              </div>
            </div>
        </div>
        
    )
}
export default Second;