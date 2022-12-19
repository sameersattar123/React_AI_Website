import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [ toggleMenu, settoggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#gpt3">What iS gpt3?</a>
          </p>
          <p>
            <a href="#openAI">Open AI</a>
          </p>
          <p>
            <a href="#caseStudies">Case Studies</a>
          </p>
          <p>
            <a href="#library">library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu"></div>
      {toggleMenu ? 
        <RiCloseLine
          color="#fff"
          size={27}
          onClick={() => settoggleMenu(false)}
        />
       : 
        <RiMenu3Line
          color="#fff"
          size={27}
          onClick={() => settoggleMenu(true)}
        />
      }
      {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#home">What iS gpt3?</a>
            </p>
            <p>
              <a href="#home">Open AI</a>
            </p>
            <p>
              <a href="#home">Case Studies</a>
            </p>
            <p>
              <a href="#home">library</a>
            </p>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
