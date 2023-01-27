import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearClientLoginDetails } from '../../redux/adminReducer';
//icon

// images
import logo from '../../images/Logo.png';
import {
  getChatTrainerDetails,
  getSelectedTrainerDetails,
} from '../../redux/clientReducers';

function ClientNav(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate('');
  const userName = localStorage.getItem('userDetails');
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    dispatch(clearClientLoginDetails());
    dispatch(getSelectedTrainerDetails(false));
    dispatch(getChatTrainerDetails(false));
    navigate('/login');
  };
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/clientHome">
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
                    <Link className="nav-link active" to="/clientHome">
                      Home
                    </Link>
                  ) : (
                    <Link className="nav-link " to="/clientHome">
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
                  {props.video ? (
                    <Link className="nav-link active" to="/Client/Video">
                      Videos
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/Client/Video">
                      Videos
                    </Link>
                  )}
                </li>
              </ul>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mar">
                <li className="nav-item">
                  {props.chat ? (
                    <Link className="nav-link active" to="/client/chat">
                      Chat
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/client/chat">
                      Chat
                    </Link>
                  )}
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
                      <Link className="dropdown-item" to="/profile">
                        Personal Info
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>{' '}
                    <li>
                      <Link className="dropdown-item" to="/plan">
                        Plans
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button
                    className="navbtn btn btn-primary btn-md"
                    onClick={logout}
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ClientNav;
