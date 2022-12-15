import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getTrainerdetails,
  trainerReject,
  trainerApprovel,
} from '../../axios/serives/AdminServices';

function AdminTrainerDetailsView() {
  let { id } = useParams();

  const [details, setDetails] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();
    async function fetchData() {
      const data = await getTrainerdetails(token, id);
      setDetails(data.trainerDetails[0]);
    }
  }, [id]);
  console.log(details);

  let trainerstatus, rejBtnDisable, appBtnDisable;
  status();
  function status() {
    if (details.status === 'Pending') {
      trainerstatus = { color: 'yellow' };
      rejBtnDisable = true;
      appBtnDisable = true;
    } else if (details.status === 'Reject') {
      trainerstatus = { color: 'red' };
      rejBtnDisable = false;
      appBtnDisable = false;
    } else {
      trainerstatus = { color: '#66ff00' };
      rejBtnDisable = false;
      appBtnDisable = false;
    }
  }

  async function reject() {
    const token = localStorage.getItem('Admintoken');
    const rejectdata = await trainerReject(token, id);
    if (rejectdata.trainerDetails) {
      setDetails(rejectdata.trainerDetails[0]);
      status();
    }
  }

  async function approvel() {
    const token = localStorage.getItem('Admintoken');
    const Approvel = await trainerApprovel(token, id);
    if (Approvel.trainerDetails) {
      setDetails(Approvel.trainerDetails[0]);
      status();
    }
  }

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 mt-4 mb-3">
              <h3>Training Video</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={details.link}
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="mt-4 pt-2">
                {rejBtnDisable ? (
                  <input
                    className="btn btn-danger btn-lg"
                    type="submit"
                    value="Reject"
                    onClick={reject}
                  />
                ) : (
                  ''
                )}
                {appBtnDisable ? (
                  <input
                    className="btn btn-primary ms-5 btn-lg"
                    type="submit"
                    value="Approvel"
                    onClick={approvel}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <section className=" gradient-custom">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{ borderRadius: '15px' }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                      Trainer Details
                    </h3>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">Full Name</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label">
                            {details.fname ? details.fname : ''}{' '}
                            {details.lname ? details.lname : ''}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">Status</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label style={trainerstatus} className="form-label">
                            {details.status ? details.status : ''}
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
                            {details.gender ? details.gender : ''}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">Phone Number</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label">
                            <a
                              style={{
                                textDecoration: 'none',
                                textDecorationColor: 'none',
                                color: 'green',
                              }}
                              target="_blank"
                              href={`https://wa.me/+91${details.phone}`}
                              rel="noreferrer"
                            >
                              {details.phone ? details.phone : ''}
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">Email Id</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label">
                            {details.email ? details.email : ''}
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
                            {details.dob ? details.dob : ''}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">Registation Date</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label
                            style={{ color: 'RED' }}
                            className="form-label"
                          >
                            {details.date ? details.date : ''}
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label">Password</label>
                            <label className="d-flex justify-content-end">
                              Forgot Password ?
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label">Password</label>
                            <label className="d-flex justify-content-end">
                              Forgot Password ?
                            </label>
                          </div>
                        </div>
                      </div>

                      */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTrainerDetailsView;
