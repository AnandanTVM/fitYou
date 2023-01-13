import React, { useState, useEffect} from 'react';
// import * as yup from "yup";
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

//validation import
import { userUpdateSchema } from '../../validation/homeValidation';

import {
  updateUserInfo,
  getuserdetails,
} from '../../axios/serives/AdminServices';


function AdminClientEdit() {
  let { id } = useParams();
  const [user, setUser] = useState('');

  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getuserdetails(token, id);

      setUser(data.userDetails[0]);
    }
  }, [id]);

  const onSubmit = async (values, actions) => {
    const token = localStorage.getItem('Admintoken');
    values.userid = user._id;
    const status = await updateUserInfo(token, values);
    if (!status.status) {
      setError('Something went wrong please try again.');
    } else if (status.status) {
      navigate('/userInfo');
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        phone: '',
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
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="d-flex ">Full Name</label>
                          </div>
                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label">
                              {user.fname ? user.fname : ''}{' '}
                              {user.lname ? user.lname : ''}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="d-flex ">Gender</label>
                          </div>
                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label">
                              {user.gender ? user.gender : ''}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="d-flex ">Date Of Brath</label>
                          </div>
                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label">
                              {user.dob ? user.dob : ''}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row ">
                        {' '}
                        <h3 className="mb-3 pb-2 pb-md-0 mb-md-">
                          Update Details
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              placeholder={user.email ? user.email : ''}
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
                              placeholder={user.phone ? user.phone : ''}
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
