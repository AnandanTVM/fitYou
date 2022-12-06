import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// images
import logo from '../../images/Logo.png';

function ClientNav(props) {
  const navigate = useNavigate('');
  const userName = localStorage.getItem('userDetails');
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    navigate('/');
  };
  return (
    <div>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  <Link className="nav-link" to="/clientHome">
                    Trainer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/clientHome">
                    Videos
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mar">
                <li className="nav-item">
                  <Link className="nav-link" to="/clientHome">
                    chat
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {props.profile ? (
                    <Link
                      className="nav-link dropdown-toggle active"
                      to="/clientHome"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
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
                      {userName ? userName : 'Profile'}
                    </Link>
                  )}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Personal Info
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>{' '}
                    <li>
                      <Link className="dropdown-item" to="/trainerSignup">
                        Plans
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <button
                      className="navbtn btn btn-primary btn-md"
                      onClick={logout}
                    >
                      LogOut
                    </button>
                  </Link>
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
    </div>
  );
}

export default ClientNav;
