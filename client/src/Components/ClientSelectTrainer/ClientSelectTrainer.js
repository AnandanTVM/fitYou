import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getallTrainerDetails } from '../../axios/serives/UserServices';
import { getSelectedTrainerDetails } from '../../redux/clientReducers';

import './ClientSelectTrainer.css';
function ClientSelectTrainer() {
  const [trainer, settrainer] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    feach();
    async function feach() {
      const token = localStorage.getItem('token');
      const data = await getallTrainerDetails(token);

      if (data.status) {
        settrainer(data.trainerDetails);
      } else {
        setError('Network error....');
      }
    }
  }, []);

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row center">
            <h2>Select Your Trainer</h2>
          </div>
          <p>{error ? error : ''}</p>

          {trainer
            ? trainer.map((data, index) => {
                return (
                  <div key={index} className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                      <div className="card shadow-0 border-primary rounded-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                <img
                                  src={data.profilePic}
                                  className="w-100"
                                  alt="not found"
                                />

                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        'rgba(253, 253, 253, 0.15)',
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                              <h5>
                                {data.fname} {data.lname}
                              </h5>
                              <div className="d-flex flex-row">
                                <div className="text-danger mb-1 me-2">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <span>{data.gender}</span>
                              </div>
                              <div className="mt-1 mb-0 text-muted small">
                                <span className="text-primary"> • </span>
                                <span>100% Trusted Trainer</span>
                                <span className="text-primary"> • </span>
                                <span style={{ color: 'green' }}>
                                  {data.status}
                                </span>
                              </div>
                              <h4 className="mb-1 me-1">Avalable Slot</h4>
                              <div className="row">
                                {data?.timeslot?.map((time, index) => {
                                  return (
                                    <div className=" col-lg-2 mt-3 py-2 ms-3 me-3">
                                      <button className="btn btn-primary">
                                        {time.time}
                                      </button>
                                    </div>
                                  );
                                })}
                              </div>
                              {/* <p className="text-truncate mb-4 mb-md-0">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                              </p> */}
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">Avalable Slot</h4>
                                {/* <span className="text-danger">
                                  <s>$20.99</s>
                                </span> */}
                              </div>
                              <h6 className="text-success">
                                Verifiyed Trainer
                              </h6>
                              <div className="d-flex flex-column mt-4">
                                <button
                                  onClick={() => {
                                    dispatch(getSelectedTrainerDetails(data));
                                  }}
                                  className="btn btn-primary btn-sm"
                                  type="button"
                                >
                                  Select As Trainer
                                </button>
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
                );
              })
            : 'No Data found...'}
        </div>
      </section>
    </div>
  );
}

export default ClientSelectTrainer;
