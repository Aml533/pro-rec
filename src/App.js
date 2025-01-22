
import { useState } from 'react';
import './App.css';
import Code from "./data1"
// import React from "react"

function App() {
  // ************************* Lec1 ******************************
  // return (
  //   React.createElement("h2",null,"aml")

  //   <div className='div1'>
  //     <h2>aml yasser</h2>
  //     <Code />

  //     <Code name="aya yasser" age="20" city="cario"/>
  //     <Code name="nour yasser" age="24" city="cario"/>
  //   </div>
  // );

  // ************************ Lec2 *********************************
  // const[x , setx]= useState(200)
  // const a1 = function(){
  //   setx(
  //     x*2
  //   )}
  // return(
  //   <div className='div1'>
  //     <button className='btn1' onClick={a1}>dbl</button>
  //     {x}
  //   </div>
  // );


  const[cusromers , setcusromers]= useState([
    {name : "aml" , age: "20" , city: "cairo"},
    {name : "aya" , age: "17" , city: "cairo"},
    {name : "nour" , age: "25" , city: "cairo"},
    {name : "mode" , age: "10" , city: "cairo"},
  ])
  return(
    <div className='div1'>
      {
        cusromers.map((cusromer)=>(
          <Code name={cusromer.name} age={cusromer.age} city={cusromer.city} status="active"/>
        ))
      }
    </div>
  )

}

export default App;
