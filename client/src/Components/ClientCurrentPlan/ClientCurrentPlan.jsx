import React from 'react';
import { useSelector } from 'react-redux';

function ClientCurrentPlan() {
  const { planDetails } = useSelector((state) => state.client);

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row center">
            <h2>Active Package Details</h2>
          </div>

          {planDetails ? (
            <div className="row justify-content-center mb-3">
              <div className="col-md-12 col-xl-10">
                <div className="card shadow-0 border-success rounded-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <h5> TrainerDetails</h5>
                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                          <img
                            src={planDetails.trainer.profilePic}
                            className="w-100"
                            alt="not found"
                          />

                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: 'rgba(253, 253, 253, 0.15)',
                              }}
                            >
                              {planDetails.trainer.fname}{' '}
                              {planDetails.trainer.lname}
                            </div>
                          </div>
                          <span>{planDetails.trainer.gender}</span>
                          <br />
                          <span>{planDetails.trainer.email}</span>
                          <br />
                          <span className=" text-success">
                            {planDetails.trainer.status}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5>Package Details</h5>
                        <div className="d-flex flex-row">
                          <div className="text-danger mb-1 me-2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>{planDetails.plan.PackageName}</span>
                        </div>
                        <div className="mt-1 mb-0 text-muted small">
                          <span className="text-primary"> • </span>
                          <span>
                            Pro Gyms Tips : {planDetails.plan.proGymsTips}
                          </span>
                          <br />
                          <span className="text-primary"> • </span>
                          <span>
                            Group Workouts : {planDetails.plan.groupWorkouts}
                          </span>
                          <br />
                          <span className="text-primary"> • </span>
                          <span>
                            Perstional Trainer :{' '}
                            {planDetails.plan.perstionalTrainer}
                          </span>
                          <br />
                          <span className="text-primary"> • </span>
                          <span>
                            Smart Workout Plan: :{' '}
                            {planDetails.plan.smartWorkoutPlan}
                          </span>
                          <br />
                          <span style={{ color: 'green' }}>{''}</span>
                        </div>
                        <p className="text-truncate mb-4 mb-md-0">
                          {planDetails.plan.discretion}
                        </p>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1 text-success">
                            {' '}
                            Active Plan
                          </h4>
                        </div>
                        <label>Valid From</label>
                        <h5 className="text-info">{planDetails.validfrom}</h5>
                        <label>Valid Till</label>
                        <h5 className="text-danger">{planDetails.validtill}</h5>
                        <div className="d-flex flex-column mt-4">
                          {/* <button
                                 
                                  className="btn btn-primary btn-sm"
                                  type="button"
                                >
                                  Select As Trainer
                                </button> */}
                          {/* <button
                                  className="btn btn-outline-primary btn-sm mt-2"
                                  type="button"
                                >
                                  Add to wishlist
                                </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            'No Data found...'
          )}
        </div>
      </section>
    </div>
  );
}

export default ClientCurrentPlan;
