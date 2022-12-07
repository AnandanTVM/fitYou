import React from 'react'
import { Link } from 'react-router-dom'
//images
import Modelman from '../../images/LoginTrainer.png'
//css
import './TrainerLogin.css'
function TrainerLogin() {
    return (
        <div>

            <div className='trainerlogin-Main'>
                <img src={Modelman} className="trainerlogin-img1" alt="modelimage" />

                <section className=" gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Client Login</h3>
                                        <form>

                                            <div className="row">
                                                <div className="col-md-12 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="text" id="firstName" className="form-control form-control-lg" />
                                                        <label className="form-label" >Phone Number</label>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="Password" className="form-control form-control-lg" />
                                                        <label className="form-label" >Password</label><label className="d-flex justify-content-end" >Forgot Password ?</label>
                                                    </div>


                                                </div>

                                            </div>

                                            <label className="d-flex justify-content-center" >Login With OTP?</label>
                                            <Link to='/signup' > <label className="d-flex justify-content-center CreatSingup-textcolour">Create an account Sign Up</label>
                                            </Link>
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

export default TrainerLogin