import React, { useState } from 'react';

import ModelWoman from '../../images/login.png';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import {
  trainerSendOtp,
  trainerVerifyOtp,
} from '../../axios/serives/HomeServices';
import { Loading } from '..';
import './TrainerOtpLogin.css';
function TrainerOtpLogin() {
  const [loader, setLoader] = useState(false);
  const [phone, setPhone] = useState('');
  const [OTP, setOTP] = useState('');
  const [otpSend, setOtpSend] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function SendOtp(event) {
    event.preventDefault();
    setLoader(true);
    const values = { Phone: phone };
    const data = await trainerSendOtp(values);
    console.log(data);
    setLoader(false);
    if (data.status) {
      setOtpSend('OTP Send successfully. Please, Check your Email.');
    } else {
      setError(data.message);
    }
  }
  async function Login(event) {
    event.preventDefault();
    setLoader(true);
    const values = { Phone: phone, otp: OTP };

    const data = await trainerVerifyOtp(values);
    console.log(data);
    setLoader(false);
    if (data.token) {
      localStorage.setItem('trainertoken', data.token);
      const trainer = jwt(data.token);
      localStorage.setItem('trainerDetails', trainer.name);

      navigate('/trainer');
    } else {
      setError('Invalid OTP Please try again...');
    }
  }

  return (
    <div>
      {loader ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="COTPlogin-Main">
          <img src={ModelWoman} className="COTPlogin-img1" alt="modelimage" />

          <section className=" gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div
                    className="card shadow-2-strong card-registration"
                    style={{ borderRadius: '15px' }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Trainer OTP Login
                      </h3>
                      {error ? (
                        <p style={{ color: 'red' }} className="red-error">
                          {error}
                        </p>
                      ) : (
                        ' '
                      )}
                      {otpSend ? <p>{otpSend}</p> : ''}

                      <form>
                        <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                              <label className="form-label">Phone Number</label>
                              <input
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                                className="form-control form-control-lg"
                              />
                            </div>
                          </div>
                        </div>

                        {otpSend ? (
                          <div className="row">
                            <div className="col-md-12 mb-4 pb-2">
                              <div className="form-outline">
                                <label className="form-label">OTP</label>
                                <input
                                  type="OTP"
                                  value={OTP}
                                  onChange={(e) => {
                                    setOTP(e.target.value);
                                  }}
                                  className="form-control form-control-lg"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                        {otpSend ? (
                          <div className="mt-4 pt-2">
                            <input
                              onClick={Login}
                              className="btn btn-primary btn-lg"
                              type="submit"
                              value="Login"
                            />
                          </div>
                        ) : (
                          <div className="mt-4 pt-2">
                            <input
                              onClick={SendOtp}
                              className="btn btn-primary btn-lg"
                              type="submit"
                              value="Send OTP"
                            />
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default TrainerOtpLogin;
