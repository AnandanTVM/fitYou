import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTrainerdetails,
  trainerReject,
} from '../../axios/serives/AdminServices';
import {
  trainerDetailsEdit,
  trainerDetailReject,
} from '../../redux/adminReducer';
function AdminTrainerDetailsView() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const [details, setDetails] = useState('');
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  // const [dob, setDob] = useState('');
  // const [gender, setGender] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [link, setLink] = useState('');
  // const [dor, setDor] = useState('');
  // const [status, setStatus] = useState('');

  const { trainerdetails } = useSelector((state) => state.admin);
  console.log(trainerdetails);

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getTrainerdetails(token, id);
      console.log('hi');
      setDetails(data.trainerDetails[0]);
      dispatch(trainerDetailsEdit(details));
    }
  }, [details, dispatch, id]);
  async function reject() {
    const token = localStorage.getItem('Admintoken');
    const rejectdata = await trainerReject(token, id);
    if (rejectdata.rejected) {
      dispatch(trainerDetailReject('Reject'));
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
                  src={trainerdetails.link}
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="mt-4 pt-2">
                <input
                  className="btn btn-danger btn-lg"
                  type="submit"
                  value="Reject"
                  onClick={reject}
                />
                <input
                  className="btn btn-primary ms-5 btn-lg"
                  type="submit"
                  value="Approvel"
                />
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
                            {trainerdetails.fname ? trainerdetails.fname : ''}{' '}
                            {trainerdetails.lname ? trainerdetails.lname : ''}
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
                          <label
                            style={{ color: 'yellow' }}
                            className="form-label"
                          >
                            {trainerdetails.status ? trainerdetails.status : ''}
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
                            {trainerdetails.gender ? trainerdetails.gender : ''}
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
                              href={`https://wa.me/+91${trainerdetails.phone}`}
                              rel="noreferrer"
                            >
                              {trainerdetails.phone ? trainerdetails.phone : ''}
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
                            {trainerdetails.email ? trainerdetails.email : ''}
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
                            {trainerdetails.dob ? trainerdetails.dob : ''}
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
                            {trainerdetails.dor ? trainerdetails.dor : ''}
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
