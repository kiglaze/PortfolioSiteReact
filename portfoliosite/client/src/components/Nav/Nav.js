import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props => (
  <header class="clearfix">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-lg-8 col-sm-6 col-xs-12">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              Iris's Professional Website
            </a>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <ul class=" nav-menu nav nav-pills">
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
    </div>
  </nav>
</header>
);

export default Nav;
