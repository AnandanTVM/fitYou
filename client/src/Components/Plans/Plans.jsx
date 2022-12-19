
import React, { useEffect, useState } from 'react';
import { viewAllPlan } from '../../axios/serives/HomeServices';

import './Plans.css';
function Plans() {
  const [plan, setPlan] = useState('')
  useEffect(() => {
    fatch();
    async function fatch() {
      const Packages = await viewAllPlan();
      console.log(Packages.plan);
      setPlan(Packages.plan)

    }
  }, [])

  return (
    <div className="row ">
      <div className="row mt-5 text-center">
        <h1>Start Training Today</h1>
        <h5 className='planOrangeColor'>Chose Your Package Now</h5>
      </div>

      <div>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
             { plan?plan.map((data,index)=>{ return(
              <div key={index} className="col-lg-4 mt-3">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title  text-uppercase text-center planOrangeColor packageDisappear ">
                 { data.packageType}
                  </h5>
                  <h5 className="card-title  text-uppercase text-center planOrangeColor planDisappear">
                 { data.PackageName}
                  </h5>
                  <h6 className="card-price text-center">
                  ₹{data.offerRate}/-<span className="period"><strike className='planOrangeColor'> ₹{data.mrp}/- </strike></span>
                  </h6>
                  <div className='planDisappear'>
                  <h5 className="card-title  text-uppercase text-center ">
                  {data.validfor}
                  </h5>
                  </div>
                  <hr />
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Pro Gyms Tips &nbsp; : &nbsp;  {data.proGymsTips}
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Group Workouts &nbsp; : &nbsp; {data.groupWorkouts}
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Perstional Trainer &nbsp; : &nbsp; {data.perstionalTrainer}
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Smart Workout Plan &nbsp; : &nbsp; {data.smartWorkoutPlan}
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                     {data.discretion}
                    </li>
                    
                    
                   
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-primary text-uppercase">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
             )})
              :""}

              {/* <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Plus
                    </h5>
                    <h6 className="card-price text-center">
                      $9<span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>5 Users</strong>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        50GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Free Subdomain
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fas fa-times"></i>
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                    <div className="d-grid">
                      <button  className="btn btn-primary text-uppercase">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* 
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      Pro
                    </h5>
                    <h6 className="card-price text-center">
                      $49<span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>Unlimited Users</strong>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        150GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>Unlimited</strong> Free Subdomains
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                    <div className="d-grid">
                      <button className="btn btn-primary text-uppercase">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Plans;
