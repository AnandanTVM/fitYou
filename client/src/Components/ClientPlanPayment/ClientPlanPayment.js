import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getPlanDetails,
  orderVerifiyPayment,
  placeOdder,
} from '../../axios/serives/UserServices';
import { getSelectedTrainerDetails } from '../../redux/clientReducers';
import { useCallback } from 'react';
import useRazorpay from 'react-razorpay';
import './ClientPlanPayment.css';
function ClientPlanPayment() {
  const { clientDetails } = useSelector((state) => state.admin);
  console.log('ClientDetails', clientDetails);
  const dispatch = useDispatch();
  const { selectedTrainerdetails } = useSelector((state) => state.client);
  console.log(selectedTrainerdetails);
  const [planDetails, setPlanDetails] = useState('');
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetchData();

    async function fetchData() {
      const data = await getPlanDetails(token, id);

      setPlanDetails(data.package);
    }
  }, [id]);

  const Razorpay = useRazorpay();

  const odderPayment = useCallback(async () => {
    const token = localStorage.getItem('token');

    const value = {};
    value.trainerId = selectedTrainerdetails._id;
    value.planId = planDetails._id;
    value.amount = planDetails.offerRate;
    value.validfor = planDetails.validfor;
    value.userId = clientDetails.userId;
    const data = await placeOdder(token, value);
    console.log(data);

    const options = {
      key: 'rzp_test_V6c4v4ekLUGUMI',
      amount: data.order.amount,
      currency: 'INR',
      name: 'fitYou',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: data.order.id,
      handler: (res) => {
        verifiyPayment(res, data.order);
      },
      prefill: {
        name: 'Piyush Garg',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#ED533B',
      },
    };
    const rzpay = new Razorpay(options);
    rzpay.open();
    async function verifiyPayment(res, order) {
      const token = localStorage.getItem('token');
      const verification = await orderVerifiyPayment(token, res, order);
      if (verification.status) {
        navigate('/plan');
      } else {
        alert('error Pls try agine...');
      }
    }
  }, [
    selectedTrainerdetails._id,
    planDetails._id,
    planDetails.offerRate,
    planDetails.validfor,
    clientDetails.userId,
    Razorpay,
    navigate,
  ]);

  return (
    <div>
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
              <h6 className="text-uppercase"> Plan details</h6>

              <div className="row">
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Package Name</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.PackageName}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Valid For</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.validfor}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Package Type</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.packageType}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Discretion</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.discretion}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Pro Gyms Tips</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.proGymsTips}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Group Workouts</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.groupWorkouts}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">Perstional Trainer</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.perstionalTrainer}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="d-flex ">SmartcWorkout Plan</label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <label className="form-label">
                        {planDetails?.smartWorkoutPlan}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <div className="row">
                  <div className="col">
                    <h6 className="text-uppercase">Trainer Details</h6>
                  </div>
                  <div className="col">
                    <button
                      className="btn  px-3"
                      style={{ color: '#ED533B' }}
                      onClick={() => {
                        dispatch(getSelectedTrainerDetails(false));
                      }}
                    >
                      Change Trainer
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="d-flex ">Trainer Name</label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label">
                          {selectedTrainerdetails?.fname}{' '}
                          {selectedTrainerdetails?.lname}
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
                          {selectedTrainerdetails?.gender}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="d-flex ">Trainer Status</label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label
                          className="form-label"
                          style={{ color: 'green' }}
                        >
                          {selectedTrainerdetails?.status}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex justify-content-between">
              <button
                className="btn  px-3"
                style={{ color: 'red' }}
                onClick={() => {
                  dispatch(getSelectedTrainerDetails(false));
                  navigate('/plan');
                }}
              >
                {' '}
                Cancel Payment
              </button>

              <button className="btn btn-success px-3" onClick={odderPayment}>
                Pay ₹{planDetails?.offerRate} /-
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">₹ {planDetails?.offerRate} /-</h1>{' '}
                <span>
                  <strike>₹ {planDetails?.mrp} /-</strike>
                </span>
              </div>

              <span>
                Enjoy all the features and perk after you complete the payment
              </span>
              <Link className="yellow decoration">Know all the features</Link>

              <div className="hightlight">
                <span>
                  100% Guaranteed support and update for the next{' '}
                  {planDetails.validfor}.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPlanPayment;
