import React from 'react';
import './Plans.css';
function Plans() {
  return (
    <div className="pricing ">
      <div className="row mt-5 text-center">
        <h1>Start Training Today</h1>
        <h5>Chose Your Package Now</h5>
      </div>
      {/* <div className="row mt-4 text-center">
        <div className="col-md-4">a</div>
        <div className="col-md-4">a</div>
        <div className="col-md-4">a</div>
      </div> */}
      <div>
        <section class="pricing py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      Free
                    </h5>
                    <h6 class="card-price text-center">
                      $0<span class="period">/month</span>
                    </h6>
                    <hr />
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Single User
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        5GB Storage
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fas fa-times"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fas fa-times"></i>
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fas fa-times"></i>
                        </span>
                        Free Subdomain
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fas fa-times"></i>
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      Plus
                    </h5>
                    <h6 class="card-price text-center">
                      $9<span class="period">/month</span>
                    </h6>
                    <hr />
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        <strong>5 Users</strong>
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        50GB Storage
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Free Subdomain
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fas fa-times"></i>
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      Pro
                    </h5>
                    <h6 class="card-price text-center">
                      $49<span class="period">/month</span>
                    </h6>
                    <hr />
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        <strong>Unlimited Users</strong>
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        150GB Storage
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        <strong>Unlimited</strong> Free Subdomains
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fas fa-check"></i>
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                    <div class="d-grid">
                      <button class="btn btn-primary text-uppercase">
                        Button
                      </button>
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

export default Plans;
