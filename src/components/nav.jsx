import React, { useState } from "react";
import "../styles/nav.css";

const Nav = ({ darkMode, handleToggle }) => {
  

  return (
    <nav>
      <div className="logo_Nav">
        <img
          src="https://raw.githubusercontent.com/VanHohenheim22/Portfolio/main/public/images/logo1.png"
          alt=""
          className="logonav"
        />
        <img
          src="https://raw.githubusercontent.com/VanHohenheim22/Portfolio/main/public/images/logo2.png"
          alt=""
          className="logonav2"
        />
      </div>

      <div className={`content_Nav ${darkMode ? 'light-modenav' : ''}`}content_Nav>
        
        <div className={`mode`}>
          <label className="switch">
            <input type="checkbox"  onChange={handleToggle}/>
            <span className="slider round"><i className='bx bxs-sun'></i> <i className='bx bxs-moon' ></i></span>
          </label>
        </div>
        
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;


