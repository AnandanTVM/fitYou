import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrainerdetails } from '../../axios/serives/AdminServices';
import { trainerDetailsEdit } from '../../redux/adminReducer';
function AdminTrainerDetailsView() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [link, setLink] = useState('');
  const [dor, setDor] = useState('');
  const [status, setStatus] = useState('');

  const { trainerdetails } = useSelector((state) => state.admin);
  console.log(trainerdetails);

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getTrainerdetails(token, id);
      console.log(data);
      setFname(data.trainerDetails[0].fname);
      setLname(data.trainerDetails[0].lname);
      setDob(data.trainerDetails[0].dob);
      setGender(data.trainerDetails[0].gender);
      setEmail(data.trainerDetails[0].email);
      setPhone(data.trainerDetails[0].phone);
      setLink(data.trainerDetails[0].link);
      setDor(data.trainerDetails[0].date);
      setStatus(data.trainerDetails[0].status);
      dispatch(trainerDetailsEdit(data.trainerDetails[0]));
    }
  }, [dispatch, id]);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 mt-4 mb-3">
              <h3>Training Video</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={link}
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="mt-4 pt-2">
                <input
                  className="btn btn-danger btn-lg"
                  type="submit"
                  value="Reject"
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
                            {fname ? fname : ''} {lname ? lname : ''}
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
                            {status ? status : ''}
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
                            {gender ? gender : ''}
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
                                color: 'white',
                              }}
                              target="_blank"
                              href={`https://wa.me/+91${phone}`}
                              rel="noreferrer"
                            >
                              {phone ? phone : ''}{' '}
                              <i class="bi bi-whatsapp"></i>
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
                            {email ? email : ''}
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
                          <label className="form-label">{dob ? dob : ''}</label>
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
                            {dor ? dor : ''}
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
