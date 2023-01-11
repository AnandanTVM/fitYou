import React from 'react';
import { Link } from 'react-router-dom';
// images
import logo from '../../images/Logo.png';

import './NavHome.css';
function NavHome(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="not avalable" height="50" width="140" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mal">
              <li className="nav-item">
                {props.home ? (
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                ) : (
                  <Link className="nav-link " to="/">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Premium
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Plans
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mar">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                {props.signup ? (
                  <Link
                    className="nav-link dropdown-toggle active"
                    to="/signup"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Signup
                  </Link>
                ) : (
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/signup"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Signup
                  </Link>
                )}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Client Signup
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>{' '}
                  <li>
                    <Link className="dropdown-item" to="/trainerSignup">
                      Trainer Signup
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                {props.login ? (
                  <Link
                    className="nav-link dropdown-toggle active"
                    to="/login"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/login"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </Link>
                )}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Client Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trainerLogin">
                      Trainer Login
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/adminLogin">
                      Admin Login
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavHome;
