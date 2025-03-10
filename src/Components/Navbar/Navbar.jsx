import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg border-bottom border-body text-white"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to={"/foods"} className="navbar-brand">
            <a className="navbar-brand">
              <img
                src="../../public/images/logo.jpg"
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={"/foods"} className="nav-link">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
              </Link>
              <Link to={"/foods/menu"} className="nav-link">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Menu
                  </a>
                </li>
              </Link>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <Link to={"/foods/gallery"} className="nav-link">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Gallery
                  </a>
                </li>
              </Link>
              <Link to={"/foods/contact"} className="nav-link">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Contact Us
                  </a>
                </li>
              </Link>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
