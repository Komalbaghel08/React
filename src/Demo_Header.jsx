import React from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import "./demo.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyReactSite</div>
      <ul className="nav-links">
        <li><a href="#"><FaHome /> Home</a></li>
        <li><a href="#"><FaInfoCircle /> About</a></li>
        <li><a href="#"><FaPhone /> Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
