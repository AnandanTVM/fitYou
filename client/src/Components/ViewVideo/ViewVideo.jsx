import React from 'react';
import { useParams } from 'react-router-dom';

function ViewVideo() {
  let videoId = useParams();
  return (
    <div>
      <div className="Csignup-Main">
        <section className=" gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration">
                  <div class="ratio ratio-16x9 ">
                    <iframe
                      src="https://www.youtube.com/embed/JKEJizRiBgQ"
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                      Client Details
                    </h3>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">Full Name</label>
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label"></label>
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
                          <label className="form-label"></label>
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
                          <label className="form-label"></label>
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
                          <input type="email" />
                          <label className="form-label">Email</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input type="tel" id="phone" />
                          <label className="form-label">Phone Number</label>
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

export default ViewVideo;
