import React from 'react'
import Model from '../../images/trainer.png'
import './TrainerSingup.css'
function TrainerSingup() {
    return (
        <div>
            <div className='TrainerSignup-Main'>
                <img src={Model} alt="modelimage" />
                <section className=" gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                        <form>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" id="firstName" className="form-control form-control-lg" />
                                                        <label className="form-label" >First Name</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" id="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label">Last Name</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="date" className="form-control form-control-lg" id="birthdayDate" />
                                                        <label className="form-label">Birthday</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <h6 className="mb-2 pb-1">Gender: </h6>

                                                    <div className="form-check form-check-inline" id='clr'>
                                                        <input className="form-check-input inputColor" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                            value="option1" />
                                                        <label className="form-check-label" >Female</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input inputColor" type="radio" name="inlineRadioOptions" id="maleGender"
                                                            value="option2" />
                                                        <label className="form-check-label" >Male</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input inputColor" type="radio" name="inlineRadioOptions" id="otherGender"
                                                            value="option3" />
                                                        <label className="form-check-label" >Other</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                                        <label className="form-label" >Email</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="tel" className="form-control form-control-lg" />
                                                        <label className="form-label" >Phone Number</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="Password" className="form-control form-control-lg" />
                                                        <label className="form-label" >Password</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="tel" className="form-control form-control-lg" />
                                                        <label className="form-label" >Confirm Password</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="file" className="form-control form-control-lg" />
                                                        <label className="form-label" >Photo Id (Fround)</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="file" className="form-control form-control-lg" />
                                                        <label className="form-label" >Photo Id (Back)</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-outline">
                                                    <input type="text" className="form-control form-control-lg" />
                                                    <label className="form-label" >Upload Video Link <br></br>(Paste a link to your YouTube video introducing yourself and training a client.)</label>
                                                </div>
                                            </div>
                                            {/* 
                                        <div className="row">
                                            <div className="col-12">

                                                <select className="select form-control-lg">
                                                    <option value="1" disabled>Choose option</option>
                                                    <option value="2">Subject 1</option>
                                                    <option value="3">Subject 2</option>
                                                    <option value="4">Subject 3</option>
                                                </select>
                                                <label className="form-label select-label">Choose option</label>

                                            </div>
                                        </div> */}

                                            <div className="mt-4 pt-2">
                                                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div>
    )
}

export default TrainerSingup
