import React from "react";
import { NavLink } from "react-router-dom";
import FoxLogo from "../assets/icon/hoppin-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <a url="/" className="logo">
            <img className="hoppin-logo" src={FoxLogo} alt="" />
          </a>
          <ul className="item-container">
            <li className="item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/map">Map</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li></li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
