import React from 'react'
import logo from '../assets/logo.jpg'
function Footer() {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <p className='copyright'>SpaceX © 2024</p>
      <p><a>Privacy Policy</a></p>
    </div>
  )
}

export default Footer