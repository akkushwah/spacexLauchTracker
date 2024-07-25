import React from 'react'
import { IoArrowDown } from "react-icons/io5";


function Hero() {
  return (
    <div id="hero" className='hero'>
      <div className='overlay'></div>
      <div className='hero-container'>
        <h3> SpaceX</h3>
        <h1>Launch Tracker</h1>
        <span className='hero-btn'>know more <IoArrowDown />
        </span>
      </div>
    </div>
  )
}

export default Hero