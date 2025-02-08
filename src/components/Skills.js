import React from "react" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Skills(){
    return(
    <div className="total" id="skills">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

                <h2 className="title-2 title_2">Skills</h2>
                <p className="title_2">You Can See My Skills Here</p>
                


                <div class="carousel-inner">

                <div class="carousel-item active">
                    <div className="move ">
                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">90%</div>
                            </div>
                            <h5>agitation</h5>
                        </div>
                        
                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">80%</div>
                            </div>
                            <h5>intelligence</h5>
                        </div>

                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">90%</div>
                            </div>
                            <h5>communication</h5>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className="move">
                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">80%</div>
                            </div>
                            <h5>passion</h5>
                        </div>

                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">80%</div>
                            </div>
                            <h5>aenergy</h5>
                        </div>

                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">80%</div>
                            </div>
                            <h5>practical</h5>
                        </div>
                    </div>
                    
                </div>

                <div class="carousel-item">
                    <div className="move">
                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle">
                            <div class="inner-circle">90%</div>
                            </div>
                            <h5>courage</h5>
                        </div>   

                        <div className="content col-8 col-sm-4 col-md-3">
                            <div class="circle ">
                            <div class="inner-circle">85%</div>
                            </div>
                            <h5>efforts</h5>
                        </div>
                        
                    </div>
                   
                </div>

                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                </button>
        </div>

    </div>
    )
}
export default Skills;