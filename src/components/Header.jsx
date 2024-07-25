import React from 'react';
import logo from '../assets/logo.jpg';
import { IoSearch } from "react-icons/io5";

function Header({ searchTerm, setSearchTerm }) {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div id="header" className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='nav-items'>
        <li><a href='#hero'>Home</a></li>
        <li><a href="#lauchlist">Upcoming</a></li>
        <li><a href="#past">Past</a></li>
        <li><a href="#about">About</a></li>
        <div className='inputfield'>
          <IoSearch />
          <input 
            type="text"
            className='input'
            placeholder='Search'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </ul>
    </div>
  )
}

export default Header;
