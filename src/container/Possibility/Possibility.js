import React from 'react'
import "./Possibility.css"
import possibility from "../../assets/possibility.png"
 
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
        <div className="gpt3__possibility-image">
            <img src={possibility} alt="" />
        </div>
        <div className="gpt3__possibility-content">
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">The possibilities Beyond your imagination</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vel ab vitae neque quos tempora ex? Ratione itaque quis cum laudantium ipsa eius enim modi. Saepe quisquam quia quasi incidunt?</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
  )
}

export default Possibility
