import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Model from '../../images/trainer.png';
import { useFormik } from 'formik';
import { trainerRegister } from '../../axios/serives/HomeServices';
import { trainerSchema } from '../../validation/homeValidation';
import './TrainerSignup.css';

function TrainerSingup() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const onSubmit = async (values, actions) => {
    const status = await trainerRegister(values);
    if (status.status === 'error') {
      setError('Trainer already existed');
    } else if (status.status === 'success') {
      navigate('/trainerLogin');
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
        link: '',
      },
      validationSchema: trainerSchema,
      onSubmit,
    });

  return (
    <div>
      <div className="TrainerSignup-Main">
        <img
          className="TrainerSignup-Main-image"
          src={Model}
          alt="modelimage"
        />
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
                    {error ? <p className="red-error">{error}</p> : ''}
                    <form onSubmit={handleSubmit}>
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
                              id="dob"
                              value={values.dob}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.dob && touched.dob
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            <label className="form-label">Birth Date</label>
                            {errors.dob && touched.dob && (
                              <p className="red-error">{errors.dob}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <h6 className="mb-2 pb-1">Gender: </h6>

                          <div
                            className="form-check form-check-inline"
                            id="clr"
                          >
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
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
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
                              type="password"
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
                            <label className="form-label">
                              Confirm Password
                            </label>
                            {errors.cpassword && touched.cpassword && (
                              <p className="red-error">{errors.cpassword}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="file"
                              id="filef"
                              
                              onChange={(e)=>{
                                setFilef(e.target.files[0])
                               
                              }
                              }
                             // onChange={handleChange}
                              // onBlur={handleBlur}
                              className={
                                errors.filef && touched.filef
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            <label className="form-label">
                              Photo Id (Fround)
                            </label>
                             {values.filef ? <img className='trainerSignup-idproof' alt="Posts"  src={values.filef ? URL.createObjectURL(values.filef) : ""}></img> : ""} 
                            {errors.filef && touched.filef && <p className='red-error'>{errors.filef}</p>}
                           
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="file"
                              id="fileb"
                              onChange={(e)=>{
                                setFileb(e.target.files[0])
                               
                              }}
                              className={
                                errors.fileb && touched.fileb
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />
                            <label className="form-label">
                              Photo Id (Back)
                            </label>
                            {errors.fileb && touched.fileb && <p className='red-error'>{errors.fileb}</p>}
                          </div>
                        </div>
                      </div> */}
                      <div className="row">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="link"
                            value={values.link}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.link && touched.link
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />
                          <label className="form-label">
                            {errors.link && touched.link && (
                              <p className="red-error">{errors.link}</p>
                            )}
                            Upload Video Link <br></br>(Paste a link to your
                            YouTube video introducing yourself and training a
                            client.)
                          </label>
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
    </div>
  );
}

export default TrainerSingup;
