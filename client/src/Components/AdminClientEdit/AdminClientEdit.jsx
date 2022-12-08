import React, { useState } from 'react';
// import * as yup from "yup";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

//validation import
import { userUpdateSchema } from '../../validation/homeValidation';

import { updateUserInfo } from '../../action/AdminAction';
function AdminClientEdit() {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const onSubmit = async (values, actions) => {
    const token = localStorage.getItem('Admintoken');
    values.userid=userDetails[0]._id;

    const status = await updateUserInfo(token,values);
    if (!status.status) {
      setError('Something went wrong please try again.');
    } else if (status.status) {
      navigate('/userInfo');
    }
  };
  const {userDetails}  = useSelector(state => state.admin)
  


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fname: `${userDetails[0]?.fname}`,
        lname:`${userDetails[0]?.lname}` ,
        dob: `${userDetails[0]?.dob}`,
        gender: `${userDetails[0]?.gender}`,
        email: `${userDetails[0]?.email}`,
        phone:`${userDetails[0]?.phone}` ,
        weight: `${userDetails[0]?.weight}`,
        height: `${userDetails[0]?.height}`,
      },
      validationSchema: userUpdateSchema,
      onSubmit,
    });

    

  return (
    <div>
      <div className="Csignup-Main">
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
                      Client Details
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
                            <label className="form-label">Birthday</label>
                            {errors.dob && touched.dob && (
                              <p className="red-error">{errors.dob}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div className="form-outline datepicker w-100">
                            <input
                              type="text"
                              className={
                                errors.gender && touched.gender
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                              value={values.gender}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              id="dob"
                            />
                            <label className="form-label">Gender</label>
                           
                          </div>
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

                      <div className="mt-4 pt-2">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="Update"
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

export default AdminClientEdit;
