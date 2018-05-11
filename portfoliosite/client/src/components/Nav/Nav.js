import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          My Site
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li className={window.location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">About</Link>
              </li>
              <li className={window.location.pathname === "/portfolio" ? "active" : ""}>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className={window.location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
    </div>
  </nav>

);

export default Nav;
