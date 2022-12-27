import React, { useState } from 'react';

import ModelWoman from '../../images/welcomWoman.png';
import { Link, useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { clientLogin } from '../../axios/serives/HomeServices';
import './Clogin.css';
function Clogin() {
  const [phone, setPhone] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function dologin(event) {
    event.preventDefault();
    const values = { Phone: phone, password: password };
    const data = await clientLogin(values);
    console.log(data);
    if (data.user) {
      localStorage.setItem('token', data.user);
      const user = jwt(data.user);
      localStorage.setItem('userDetails', user.name);

      navigate('/clientHome');
    } else {
      setError('Invalid Phone Number/Password..');
    }
  }

  return (
    <div>
      <div className="Clogin-Main">
        <img src={ModelWoman} className="Clogin-img1" alt="modelimage" />

        <section className=" gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{ borderRadius: '15px' }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Client Login</h3>
                    {error ? (
                      <p style={{ color: 'red' }} className="red-error">
                        {error}
                      </p>
                    ) : (
                      ' '
                    )}
                    <form onSubmit={dologin}>
                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="phone"
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">Phone Number</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="Password"
                              value={password}
                              onChange={(e) => {
                                setpassword(e.target.value);
                              }}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">Password</label>
                            <label className="d-flex justify-content-end">
                              Forgot Password ?
                            </label>
                          </div>
                        </div>
                      </div>
                      <Link to="/login/ClientOTP">
                        <label className="d-flex justify-content-center OTP-textcolour">
                          Login With OTP?
                        </label>
                      </Link>
                      <Link to="/signup">
                        <label className="d-flex justify-content-center CreatSingup-textcolour">
                          Create an account Sign Up
                        </label>
                      </Link>
                      <div className="mt-4 pt-2">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Clogin;
