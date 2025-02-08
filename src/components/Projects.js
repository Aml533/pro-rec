import React, { useState } from "react" ;
import { Element } from "react-scroll";
import First from "./First";
import Second from "./Second";
import HeaderProject from "./HeaderProject"

function Projects(){
    const [ShowFirst , setShowFirst] = useState(true) 
    const [ShowParagraph , setShowParagraph] = useState(false) 

    return(
        <>
    <div className="progects">
            <HeaderProject setShowFirst={setShowFirst} setShowParagraph = {setShowParagraph}/>

            {ShowFirst && (
            <Element name="first">
                <First />
            </Element>
            )}
            
            {ShowParagraph && 
            <p className="before_second">this section expreasses the types and beauty of flowers . . . .</p>}
            
            <Element name="second">
                <Second />
            </Element>
    </div>
    </>
    )
}
export default Projects;