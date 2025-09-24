
import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/react.svg"; 

const Layout = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />

        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Component will render here */}
      <Outlet />

      <footer>
        Footer
      </footer>
    </>
  );
};

export default Layout;