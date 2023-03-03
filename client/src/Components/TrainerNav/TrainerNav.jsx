import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearTrainerLoginDetails } from '../../redux/adminReducer';
import { getClientDetails } from '../../redux/trainerReducer';
// images
import logo from '../../images/Logo.png';

function TrainerNav(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate('');
  const userName = localStorage.getItem('trainerDetails');
  const logout = () => {
    localStorage.removeItem('trainertoken');
    localStorage.removeItem('trainerDetails');
    dispatch(clearTrainerLoginDetails());
    dispatch(getClientDetails(false));
    navigate('/trainerLogin');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/trainer">
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
                  <Link className="nav-link active" to="/trainer">
                    Home
                  </Link>
                ) : (
                  <Link className="nav-link " to="/trainer">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.clientinfo ? (
                  <Link className="nav-link active" to="/trainer/clientDetails">
                    Client Info
                  </Link>
                ) : (
                  <Link className="nav-link" to="/trainer/clientDetails">
                    Client Info
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trainer">
                  Manage Videos
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mar">
              <li className="nav-item">
                {props.upload ? (
                  <Link className="nav-link active" to="/trainer/upload">
                    Upload Video
                  </Link>
                ) : (
                  <Link className="nav-link" to="/trainer/upload">
                    Upload Video
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {props.chat ? (
                  <Link className="nav-link active" to="/trainer/Chat">
                    chat
                  </Link>
                ) : (
                  <Link className="nav-link" to="/trainer/Chat">
                    chat
                  </Link>
                )}
              </li>
              <li className="nav-item dropdown">
                {props.profile ? (
                  <Link
                    className="nav-link dropdown-toggle active"
                    to="/trainer"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   {userName ? userName : 'Profile'}
                  </Link>
                ) : (
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/trainer"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userName ? userName : 'Profile'}
                  </Link>
                )}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/trainer/profile">
                      Personal Info
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trainer">
                      Payments
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

export default TrainerNav;
