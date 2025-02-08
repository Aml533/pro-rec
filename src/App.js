import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Last from "./components/Last.js"
import Projects from "./components/Projects.js"
import Skills from "./components/Skills.js"
import { Element } from "react-scroll";
import React from "react" ;




function App(){
  return(
    <>
    <div className="routers">
    <Router>

    <Header />
      <Element name="home" >
        <Home />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="last">
        <Last />
      </Element>
    </Router>
    </div>
    </>
  )

}
export default App;