import React, { useState } from 'react';
// import * as yup from "yup";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
//validation import
import { userSchema } from '../../validation/homeValidation';
import { clientRegister } from '../../axios/serives/HomeServices';

//images
import Model from '../../images/models.png';
//css
import './CsignUp.css';

function CsignUp() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const onSubmit = async (values, actions) => {
    const status = await clientRegister(values);
    if (status.status === 'error') {
      setError('Client already existed');
    } else if (status.status === 'success') {
      navigate('/login');
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fname: '',
        lname: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
        weight: '',
        height: '',
      },
      validationSchema: userSchema,
      onSubmit,
    });
  console.log(errors);

  return (
    <div className="Csignup-Main">
      <img src={Model} alt="modelimage" />
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
                    Registration Form
                  </h3>

                  <form onSubmit={handleSubmit}>
                    {error ? <p className="red-error">{error}</p> : ''}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="fname"
                            value={values.fname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.fname && touched.fname
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">First Name</label>
                          {errors.fname && touched.fname && (
                            <p className="red-error">{errors.fname}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lname"
                            value={values.lname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.lname && touched.lname
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Last Name</label>
                          {errors.lname && touched.lname && (
                            <p className="red-error">{errors.lname}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className={
                              errors.dob && touched.dob
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="dob"
                          />
                          <label className="form-label">Birth Date</label>
                          {errors.dob && touched.dob && (
                            <p className="red-error">{errors.dob}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="gender"
                            value="Other"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Other</label>
                        </div>

                        {errors.gender && touched.gender && (
                          <p className="red-error">{errors.gender}</p>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"
                            className={
                              errors.email && touched.email
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Email</label>
                          {errors.email && touched.email && (
                            <p className="red-error">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.phone && touched.phone
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Phone Number</label>
                          {errors.phone && touched.phone && (
                            <p className="red-error">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="Password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.password && touched.password
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Password</label>
                          {errors.password && touched.password && (
                            <p className="red-error">{errors.password}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="Password"
                            id="cpassword"
                            value={values.cpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.cpassword && touched.cpassword
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Confirm Password</label>
                          {errors.cpassword && touched.cpassword && (
                            <p className="red-error">{errors.cpassword}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="weight"
                            value={values.weight}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.weight && touched.weight
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Weight(Kg)</label>
                          {errors.weight && touched.weight && (
                            <p className="red-error">{errors.weight}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="height"
                            value={values.height}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.height && touched.height
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">Height(Cm)</label>
                          {errors.height && touched.height && (
                            <p className="red-error">{errors.height}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* 
                                        <div className="row">
                                            <div className="col-12">

                                                <select className="select form-control-lg">
                                                    <option value="1" disabled>Choose option</option>
                                                    <option value="2">Subject 1</option>
                                                    <option value="3">Subject 2</option>
                                                    <option value="4">Subject 3</option>
                                                </select>
                                                <label className="form-label select-label">Choose option</label>

                                            </div>
                                        </div> */}

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
  );
}

export default CsignUp;
