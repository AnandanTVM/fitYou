import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getClientDetails } from '../../axios/serives/TrainerServices';

function TrainerViewClientDetails() {
    const [details, setDetails] = useState('');
    // const [plan, setPlan] = useState('');
    const { id } = useParams();
    const [error, SetError] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('trainertoken');
        featchData()
        async function featchData() {
            let data = await getClientDetails(token, id)
            if (data.status) {
                // setPlan(data.clientdetails[0])
                setDetails(data.clientDetails[0])

            } else {
                SetError(data.error)
            }


        }
    }, [id])
    console.log(details);
    return (
        <div>

            <div className="Csignup-Main">
                <section className=" gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div
                                    className="card shadow-2-strong card-registration"
                                    style={{ borderRadius: '15px' }}
                                >
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                                            Client Details
                                        </h3>


                                        {error ? <p className="red-error">{error}</p> : ''}
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Full Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        
                                                        {details ? details.Clientdetails.fname : ''}{' '}
                                                        {details ? details.Clientdetails.lname : ''}
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
                                                        {details ? details.Clientdetails.gender : ''}
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
                                                        {details ? details.Clientdetails.dob : ''}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Weight</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        {details ? details.Clientdetails.weight : ''} Kg
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Height</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        {details ? details.Clientdetails.height : ''} Cm
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            {' '}
                                            <h3 className="mb-3 pb-2 pb-md-0 mb-md-">
                                                Package Details
                                            </h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Alloted Time  </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" style={{color:'yellow'}}>
                                                        {details ? details.allotedTime : ''} 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Package Name</label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        {details ? details.plan.PackageName : ''} 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Package Type </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label">
                                                        {details ? details.plan.packageType : ''} 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Payment Status  </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" style={{color:'green'}}>
                                                        {details ? details.paymentStatus : ''} 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Package Vaild Till  </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" style={{color:'red'}}>
                                                        {details ? details.validtill : ''} 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="d-flex ">Package Vaild From  </label>
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" style={{color:'blue'}}>
                                                        {details ? details.validfrom : ''} 
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="mt-4 pt-2">
                                            <input
                                                className="btn btn-success btn-lg me-5"
                                                type="submit"
                                                value="Chat"
                                            />
                                            <input
                                                className="btn btn-danger btn-lg ms-5"
                                                type="submit"
                                                value="Video call"
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
    )
}

export default TrainerViewClientDetails