import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAdminLoginDetails } from '../../redux/adminReducer';

// images
import logo from '../../images/Logo.png';

function AdminNav(props) {
  const dispatch = useDispatch();
  const userName = localStorage.getItem('adminDetails');
  const logout = () => {
    localStorage.removeItem('Admintoken');
    localStorage.removeItem('adminDetails');
    dispatch(clearAdminLoginDetails());
  };
 
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/adminHome">
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
                    <Link className="nav-link active" to="/adminHome">
                      Home
                    </Link>
                  ) : (
                    <Link className="nav-link " to="/adminHome">
                      Home
                    </Link>
                  )}
                </li>

                <li className="nav-item dropdown">
                  {props.authentication ? (
                    <Link
                      className="nav-link dropdown-toggle active"
                      to="/adminHome"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Authentication
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
                      Authentication
                    </Link>
                  )}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/trainerInfo">
                        Trainer Info
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/userInfo">
                        Client Info
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                      <Link className="dropdown-item" to="/trainerApprovel">
                        Pending For Approvel
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  {props.video ? (
                    <Link
                      className="nav-link dropdown-toggle active"
                      to="/adminHome"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Videos
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
                      Videos
                    </Link>
                  )}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/admin/videoUpload">
                        Upload Videos
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/adminHome">
                        Videos Management
                      </Link>
                    </li>

                    <hr className="dropdown-divider" />
                    <li>
                      <Link className="dropdown-item" to="/adminHome">
                        Pending Videos For Approvel
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mar">
                <li className="nav-item dropdown">
                  {props.packages ? (
                    <Link
                      className="nav-link dropdown-toggle active"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Packages
                    </Link>
                  ) : (
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Packages
                    </Link>
                  )}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/admin/newPackages">
                        New Packages
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/admin/managePackage">
                        Manage Packages
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/adminHome">
                        Manage Course
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/adminHome">
                    Chats
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {props.payments ? (
                    <Link
                      className="nav-link dropdown-toggle active"
                      to="/adminHome"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Payments
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
                      {' '}
                      Payments
                    </Link>
                  )}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/adminHome">
                        Trainer Payments
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/adminHome">
                        Client Payments
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="navbtn btn btn-primary btn-md dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userName ? userName : 'Profile'}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item">Profile</Link>
                      </li>
                      <li>
                        <Link
                          to="/adminLogin"
                          className="dropdown-item"
                          onClick={logout}
                        >
                          LogOut 🚪
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AdminNav;
