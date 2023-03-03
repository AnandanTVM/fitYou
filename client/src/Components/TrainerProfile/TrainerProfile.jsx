import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { trainerProfile } from '../../axios/serives/TrainerServices';

function TrainerProfile() {
    const [userDetails, setUserDetails] = useState();
    const token = localStorage.getItem('trainertoken');

    async function fetchData() {
        const data = await trainerProfile(token);
        setUserDetails(data.responce[0]);
        console.log(userDetails);
    }
    useEffect(() => {

        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(userDetails ? userDetails : '');
    return (

        <div>
            <div className="container emp-profile">
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    src={userDetails ? userDetails.profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"}
                                    alt=""
                                />
                                <div className="file btn btn-lg btn-primary">
                                    {userDetails?.fname} {userDetails?.lname}
                                    {/* <input type="file" name="file" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='row' >
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <span
                                            className="nav-link active"
                                            id="home-tab"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Trainer Details
                                        </span>
                                    </li>
                                    <li className="nav-item"></li>
                                </ul>
                            </div>
                            <div className="tab-content profile-tab mt-5" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userDetails?.fname} {userDetails?.lname}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Gender</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userDetails?.gender}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userDetails?.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userDetails?.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Dob</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userDetails?.dob}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-2">
                            <input
                                type="button"
                                className="profile-edit-btn"
                                value="Edit Profile"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Address</p>
                                {userDetails?.address}
                                <br />
                            </div>
                        </div>
                        <div className="col-md-8 ">
                            <div className='row' >
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <span
                                            className="nav-link active"
                                            id="home-tab"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            ID Details
                                        </span>
                                    </li>
                                    <li className="nav-item"></li>
                                </ul>
                            </div>
                            <div className="tab-content profile-tab mt-5" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Aadhar Number</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {userDetails?.aadharNumber}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Aadhar Front</label>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4 d-flex justify-content-center">
                                                <img
                                                    src={
                                                        userDetails?.aadharFront
                                                            ? userDetails.aadharFront
                                                            : 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
                                                    }
                                                    alt="example placeholder"
                                                    style={{ width: '300px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>AadharBack</label>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4 d-flex justify-content-center">
                                                <img
                                                    src={
                                                        userDetails?.aadharBack
                                                            ? userDetails.aadharBack
                                                            : 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
                                                    }
                                                    alt="example placeholder"
                                                    style={{ width: '300px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TrainerProfile