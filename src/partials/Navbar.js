import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="index-4.html">
            <img
              src="assets/img/logo-white-1x.png"
              width={120}
              alt="logo"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu" />
          </button>
          <div
            className="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-Link page-scroll dropdown-toggle"
                  href="#"
                  id="navbarDropdownHome"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div
                  className="dropdown-menu submenu"
                  aria-labelledby="navbarDropdownHome"
                >
                  <a className="dropdown-item" href="index.html">
                    Demo Template 1
                  </a>
                  <a className="dropdown-item" href="index-2.html">
                    Demo Template 2
                  </a>
                  <a className="dropdown-item" href="index-3.html">
                    Demo Template 3
                  </a>
                  <a className="dropdown-item" href="index-4.html">
                    Demo Template 4
                  </a>
                  <a className="dropdown-item" href="index-5.html">
                    Demo Template 5
                  </a>
                  <a className="dropdown-item" href="index-6.html">
                    Demo Template 6
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-Link page-scroll dropdown-toggle"
                  href="#"
                  id="navbarBlogPage"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                  <span className="custom-nav-badge badge badge-danger badge-pill">
                    New
                  </span>
                </a>
                <div
                  className="dropdown-menu submenu"
                  aria-labelledby="navbarBlogPage"
                >
                  <a className="dropdown-item" href="blog-default.html">
                    Blog Grid
                  </a>
                  <a className="dropdown-item" href="blog-left-sidebar.html">
                    Blog Left Sidebar
                  </a>
                  <a
                    className="dropdown-item"
                    href="blog-single-right-sidebar.html"
                  >
                    Details Right Sidebar
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-Link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <div className="download-btn">
                  <Link to="#" id="wallet-connect-btn" className="btn mr-3">
                    Connect Wallet
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
