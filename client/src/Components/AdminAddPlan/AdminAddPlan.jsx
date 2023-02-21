import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { addPlan } from '../../axios/serives/AdminServices';
import { newPlanSchema } from '../../validation/homeValidation';
function AdminAddPlan() {
  //   const navigate = useNavigate();

  const [error, setError] = useState('');
  const onSubmit = async (values, actions) => {
    console.log(values, actions);

    const token = localStorage.getItem('Admintoken');
    const status = await addPlan(token, values);
    if (status.status === 'error') {
      setError('Please try again after some time.');
    } else if (status.status === 'success') {
      // navigate('/adminHome');
      actions.resetForm();

      setError('Sucessfully added.');
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        PackageName: '',
        validFor: '',
        packageType: '',
        mrp: '',
        offerRate: '',
        discretion: '',
        proGymsTips: '',
        groupWorkouts: '',
        perstionalTrainer: '',
        smartWorkoutPlan: '',
      },
      validationSchema: newPlanSchema,
      onSubmit,
    });

  return (
    <div className="row justify-content-center ">
      <div className="col-md-8 col-sm-12">
        <section className=" gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: '15px' }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">New Package</h3>
                  {error ? <p className="red-error">{error}</p> : ''}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline mb-3">
                          <label className="form-label">Package Name</label>
                          <input
                            type="text"
                            id="PackageName"
                            value={values.PackageName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.PackageName && touched.PackageName
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />

                          {errors.PackageName && touched.PackageName && (
                            <p className="red-error">{errors.PackageName}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="form-label select-label">
                          Valid For
                        </label>
                        <div className="form-outline mb-3">
                          <select
                            name="validfor"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="select form-control-lg"
                          >
                            <option>Choose option</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2 Month">2 Month</option>
                            <option value="3 Month">3 Month</option>
                            <option value="4 Month">4 Month</option>
                            <option value="5 Month">5 Month</option>
                            <option value="6 Month">6 Month</option>
                            <option value="7 Month">7 Month</option>
                            <option value="8 Month">8 Month</option>
                            <option value="9 Month">9 Month</option>
                            <option value="10 Month">10 Month</option>
                            <option value="11 Month">11 Month</option>
                            <option value="12 Month">12 Month</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <h6 className="mb-2 pb-1">Package Type: </h6>

                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="packageType"
                            value="ELITE"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">ELITE</label>
                        </div>
                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="packageType"
                            value="PRO"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">PRO</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="packageType"
                            value="Basic"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Basic</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="packageType"
                            value="Limited Time"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">
                            Limited Time
                          </label>
                        </div>

                        {errors.packageType && touched.packageType && (
                          <p className="red-error">{errors.packageType}</p>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline mb-3">
                          <label className="form-label">MRP</label>
                          <input
                            type="number"
                            id="mrp"
                            value={values.mrp}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.mrp && touched.mrp
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />

                          {errors.mrp && touched.mrp && (
                            <p className="red-error">{errors.mrp}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline mb-3">
                          <label className="form-label">Offer Rate</label>
                          <input
                            type="number"
                            id="offerRate"
                            value={values.offerRate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.offerRate && touched.offerRate
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />

                          {errors.offerRate && touched.offerRate && (
                            <p className="red-error">{errors.offerRate}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="">
                        <div className="form-outline mb-3">
                          <label className="form-label">Discretion</label>
                          <textarea
                            type="text"
                            id="discretion"
                            value={values.discretion}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.discretion && touched.discretion
                                ? 'form-control form-control-lg input-error'
                                : 'form-control form-control-lg'
                            }
                          />

                          {errors.discretion && touched.discretion && (
                            <p className="red-error">{errors.discretion}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">PRO Gyms Tips: </h6>

                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="proGymsTips"
                            value="Unlimited"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Unlimited</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="proGymsTips"
                            value="2 Month"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">2 Month</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="proGymsTips"
                            value="Nil"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Nil</label>
                        </div>

                        {errors.proGymsTips && touched.proGymsTips && (
                          <p className="red-error">{errors.proGymsTips}</p>
                        )}
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Group Workouts: </h6>

                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="groupWorkouts"
                            value="Unlimited"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Unlimited</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="groupWorkouts"
                            value="2 Month"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">2 Month</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="groupWorkouts"
                            value="Nil"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Nil</label>
                        </div>

                        {errors.groupWorkouts && touched.groupWorkouts && (
                          <p className="red-error">{errors.groupWorkouts}</p>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Personal Trainer: </h6>

                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="perstionalTrainer"
                            value="Unlimited"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Unlimited</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="perstionalTrainer"
                            value="Daily 1 hour"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">
                            Daily 1 hour
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="perstionalTrainer"
                            value="Nil"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Nil</label>
                        </div>

                        {errors.perstionalTrainer &&
                          touched.perstionalTrainer && (
                            <p className="red-error">
                              {errors.perstionalTrainer}
                            </p>
                          )}
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Smart Workout Plan: </h6>

                        <div className="form-check form-check-inline" id="clr">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="smartWorkoutPlan"
                            value="Unlimited"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Unlimited</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input inputColor"
                            type="radio"
                            name="smartWorkoutPlan"
                            value="Nil"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-check-label">Nil</label>
                        </div>

                        {errors.smartWorkoutPlan &&
                          touched.smartWorkoutPlan && (
                            <p className="red-error">
                              {errors.smartWorkoutPlan}
                            </p>
                          )}
                      </div>
                    </div>

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
        </section>
      </div>
    </div>
  );
}

export default AdminAddPlan;
