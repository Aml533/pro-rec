// import React from "react" ;
import { Link , NavLink } from "react-router-dom" ;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons' ;


function Home(){
    const [displayedText , setDisplayedText] = useState("")
  const [currentIndex , setCurrentIndex] = useState(0)
  const [wordIndex , setWordIndex] = useState(0)
  const [isDeleting , setIsDeleting] = useState(false)

  const words = ["FullStack Developer" , "FrontEnd Developer" , "BackEnd Developer"];

  useEffect(()=>{
    const interval = setInterval(()=>{
      const currentWord = words[wordIndex]

      if(!isDeleting){
        if(currentIndex < currentWord.length){
          setDisplayedText((pre)=> pre + currentWord[currentIndex])
          setCurrentIndex((pre)=> pre +1)
        }else{
          setTimeout(() => {
            setIsDeleting(true)
          }, 1000);
        }
      }

      else{
        if(currentIndex>0){
          setDisplayedText((pre)=> pre.slice(0 ,-1))
          setCurrentIndex((pre)=> pre -1);
        }else{
          setIsDeleting(false)
          setWordIndex((pre)=> (pre +1 )% words.length);
        }
      }
    } , isDeleting ? 100 : 200)
    return ()=> clearInterval(interval)
  } , [currentIndex , isDeleting , wordIndex])
    return(

        <div class="row back_img flex-md-row">
            <div class="col-12 col-md-6 right_side">
                <p className="Welcome_p">Welcome All In My Protfolio</p>
                <h2 className="Hi_h2">Hi, I’m Aml <br/> Yasser <br/> Othman , {displayedText}</h2>
                <p className="Hello">Hello Everyone , I have 2 years of Experience in Web Development</p>
                <h6>Let’s Connect </h6>
                <FontAwesomeIcon className="arrow_icon" icon={faArrowRight} />
            </div>

            <div class="col-12 col-md-6 left_side">
            <img className="space_img img-fluid" src="/image/space2.jpg" alt="space image" />

            </div>
        </div>
    )
}
export default Home;