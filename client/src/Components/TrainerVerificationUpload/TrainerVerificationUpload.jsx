import React from 'react'
import { useFormik } from 'formik';
// import { uploadVideo } from '../../axios/serives/AdminServices';
import axios from 'axios';
import { uploadVideoSchema } from '../../validation/homeValidation';
import { useState } from 'react';
function TrainerVerificationUpload() {
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
   
    
      const uploadImage1 = async (e) => {
        
         setImage1(e.target.files[0]);
           setFieldValue('profilePic',e.target.files[0]);
      };
      const uploadImage2 = async (e) => {
        
         setImage2(e.target.files[0]);
           setFieldValue('aadharFront',e.target.files[0]);
      };
      const uploadImage3 = async (e) => {
        
         setImage3(e.target.files[0]);
           setFieldValue('aadharBack',e.target.files[0]);
      };
      const onSubmit = async (values, actions) => {
        // setLoding(true);
        // const formdata = new FormData();
        // formdata.append('file', image);
        // formdata.append('upload_preset', 'wnpsatvh');
        // formdata.append('cloud_name', 'drh9n6s0b');
    
        // const { data } = await axios.post(
        //   'https://api.cloudinary.com/v1_1/drh9n6s0b/image/upload',
        //   formdata
        // );
    
        // if (data.url) {
        //   imageLink = data.url;
        //   console.log(data.url);
        //   console.log('image', imageLink);
        // }
    
        // if (imageLink) {
        //   values.thumbnail = imageLink;
        //   values.creatorId = creatorId;
    
        //   if (props.trainer) {
        //     const token = localStorage.getItem('trainertoken');
        //     values.status = 'Pending';
        //     const status = await trainerVideoupload(token, values);
        //     if (status.status === 'error') {
        //       setLoding(false);
        //       setError('Please try again after some time.');
        //     } else if (status.status === 'success') {
        //       setLoding(false);
        //       navigate('/trainer');
        //       // actions.resetForm()
        //     }
        //   } else if (props.admin) {
        //     const token = localStorage.getItem('Admintoken');
        //     const status = await uploadVideo(token, values);
        //     if (status.status === 'error') {
        //       setLoding(false);
        //       setError('Please try again after some time.');
        //     } else if (status.status === 'success') {
        //       setLoding(false);
        //       navigate('/adminHome');
        //       // actions.resetForm()
        //     }
        //   }
        // }
      };
      const {
        values,
        errors,
        setFieldValue,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useFormik({
        initialValues: {
         
            profilePic: '',
        },
        validationSchema: uploadVideoSchema,
        onSubmit,
      });
    return (
        <div>

            <section className=" gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-12 col-xl-12">
                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: '15px' }}
                            >
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Upload Your Details</h3>
                                    <h6>Dreaer Trainer Plase upload your Photo and aadhar card to be a Active PT</h6>
                                    {/* {error ? (
                      <p style={{ color: 'red' }} className="red-error">
                        {error}
                      </p>
                    ) : (
                      ' '
                    )} */}
                                    <form  onSubmit={handleSubmit}>
                                        <div className="row mt-5">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <label className="d-flex justify-content-center OTP-textcolour">
                                                    Upload Photo
                                                </label>
                                                <div>
                                                    <div class="d-flex justify-content-center mb-4">
                                                        <img src={image1 ? URL.createObjectURL(image1) : 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg'}
                                                            class="rounded-circle" alt="example placeholder" style={{ width: '200px' }} />
                                                    </div>
                                                    <div class="d-flex justify-content-center">
                                                        <div class="btn btn-primary btn-rounded">
                                                            <label class="form-label text-white m-1" for="profilePic">Choose file</label>
                                                            {/* <input type="file" class="form-control d-none" id="customFile2" /> */}
                                                            <input
                                                                type="file"
                                                                id="profilePic"
                                                                name="profilePic"
                                                                onChange={uploadImage1}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    errors.profilePic && touched.profilePic
                                                                        ? 'form-control d-none input-error'
                                                                        : 'form-control d-none'
                                                                }
                                                            />

                                                            {errors.profilePic && touched.profilePic && (
                                                                <p className="red-error">
                                                                    {errors.profilePic}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <label className="d-flex justify-content-center OTP-textcolour">
                                                    Aadhar Front Photo
                                                </label>
                                                <div>
                                                    <div class="mb-4 d-flex justify-content-center">
                                                        <img src={image2 ? URL.createObjectURL(image2) :"https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"}
                                                            alt="example placeholder" style={{ width: '300px' }} />
                                                    </div>
                                                    <div class="d-flex justify-content-center">
                                                        <div class="btn btn-primary btn-rounded">
                                                            <label class="form-label text-white m-1" for="aadharFront">Choose file</label>
                                                            <input
                                                                type="file"
                                                                id="aadharFront"
                                                                name="aadharFront"
                                                                onChange={uploadImage2}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    errors.aadharFront && touched.aadharFront
                                                                        ? 'form-control d-none input-error'
                                                                        : 'form-control d-none'
                                                                }
                                                            />

                                                            {errors.aadharFront && touched.aadharFront && (
                                                                <p className="red-error">
                                                                    {errors.aadharFront}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                            <div className="form-outline mb-3">
                                <label className="form-label">Discretion</label>
                                <input
                                  type="text"
                                  id="discretion"
                                  value={values.discretion}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.discretion && touched.discretion
                                      ? 'form-control form-control-lg input-error'
                                      : 'form-control form-control-lg'
                                  }
                                />

                                {errors.discretion && touched.discretion && (
                                  <p className="red-error">
                                    {errors.discretion}
                                  </p>
                                )}
                              </div>
                              <div className="form-outline mb-3">
                                <label className="form-label">Discretion</label>
                                <textarea
                                  type="text"
                                  id="discretion"
                                  value={values.discretion}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.discretion && touched.discretion
                                      ? 'form-control form-control-lg input-error'
                                      : 'form-control form-control-lg'
                                  }
                                />

                                {errors.discretion && touched.discretion && (
                                  <p className="red-error">
                                    {errors.discretion}
                                  </p>
                                )}
                              </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <label className="d-flex justify-content-center OTP-textcolour">
                                                    Aadhar Back Photo
                                                </label>
                                                <div>
                                                    <div class="mb-4 d-flex justify-content-center">
                                                        <img src={image3 ? URL.createObjectURL(image3) :"https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"}
                                                            alt="example placeholder" style={{ width: '300px' }} />
                                                    </div>
                                                    <div class="d-flex justify-content-center">
                                                        <div class="btn btn-primary btn-rounded">
                                                            <label class="form-label text-white m-1" for="aadharBack">Choose file</label>
                                                            <input
                                                                type="file"
                                                                id="aadharBack"
                                                                name="aadharBack"
                                                                onChange={uploadImage3}
                                                                onBlur={handleBlur}
                                                                className={
                                                                    errors.aadharBack && touched.aadharBack
                                                                        ? 'form-control d-none input-error'
                                                                        : 'form-control d-none'
                                                                }
                                                            />

                                                            {errors.aadharBack && touched.aadharBack && (
                                                                <p className="red-error">
                                                                    {errors.aadharBack}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <label className="d-flex justify-content-center OTP-textcolour">
                                            Login With OTP?
                                        </label> */}

                                        <div className="mt-4 pt-2">
                                            <input
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                                value="Upload"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrainerVerificationUpload