import React from 'react';
import { useFormik } from 'formik';
// import { uploadVideo } from '../../axios/serives/AdminServices';
import axios from 'axios';
import { trainerBaseSchema } from '../../validation/homeValidation';
import { useState } from 'react';
import { Loading } from '..';
import { useDispatch } from 'react-redux';
import { clearTrainerLoginDetails } from '../../redux/adminReducer';
import { trainerDetailsUpdate } from '../../axios/serives/TrainerServices';
import { useNavigate } from 'react-router-dom';
import { getClientDetails } from '../../redux/trainerReducer';
function TrainerVerificationUpload() {
  const dispatch = useDispatch();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [error, setError] = useState('');
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    setLoding(true);

    const profailepic = await uploadImage(image1);
    const aadharFrontPic = await uploadImage(image2);
    const aadharBackPic = await uploadImage(image3);

    async function uploadImage(image) {
      try {
        const formdata = new FormData();
        formdata.append('file', image);
        formdata.append('upload_preset', 'wnpsatvh');
        formdata.append('cloud_name', 'drh9n6s0b');

        const { data } = await axios.post(
          'https://api.cloudinary.com/v1_1/drh9n6s0b/image/upload',
          formdata
        );

        if (data.url) {
          return data.url;
        }
      } catch (error) {
        return false;
      }
    }
    if (profailepic && aadharFrontPic && aadharBackPic) {
      console.log('got all values');
      values.profilePic = profailepic;
      values.aadharBack = aadharFrontPic;
      values.aadharFront = aadharBackPic;

      console.log(values);
      const token = localStorage.getItem('trainertoken');
      try {
        const data = await trainerDetailsUpdate(token, values);
        if (data.status) {
          logout();
          function logout() {
            localStorage.removeItem('trainertoken');
            localStorage.removeItem('trainerDetails');
            dispatch(clearTrainerLoginDetails());
            navigate('/trainerLogin');
          }
          setLoding(false);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError(error);
      }
      setLoding(false);
    } else {
      setError('Error in image upload..');
      setLoding(false);
    }
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
      address: '',
      aadharNumber: '',
      aadharBack: '',
      aadharFront: '',
    },
    validationSchema: trainerBaseSchema,
    onSubmit,
  });
  const logout = () => {
    localStorage.removeItem('trainertoken');
    localStorage.removeItem('trainerDetails');
    dispatch(clearTrainerLoginDetails());
    dispatch(getClientDetails(false));
    navigate('/trainerLogin');
  };
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <section className=" gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-12 col-xl-12">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{ borderRadius: '15px' }}
                ><div className=' ms-5 mt-5 me-5'><button 
                        className="navbtn btn btn-primary btn-md"
                        onClick={logout}
                      >
                        LogOut
                      </button></div>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                      Upload Your Details
                    </h3>
                    
                    
                    <h6>
                      Dreaer Trainer Plase upload your Photo and aadhar card to
                      be a Active PT
                    </h6>
                    {error ? (
                      <p style={{ color: 'red' }} className="red-error">
                        {error}
                      </p>
                    ) : (
                      ' '
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-5">
                        <div className="col-md-6 mb-4 pb-2">
                          <label className="d-flex justify-content-center OTP-textcolour">
                            Upload Photo
                          </label>
                          <div>
                            <div className="d-flex justify-content-center mb-4">
                              <img
                                src={
                                  image1
                                    ? URL.createObjectURL(image1)
                                    : 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg'
                                }
                                className="rounded-circle"
                                alt="example placeholder"
                                style={{ width: '200px' }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div className="btn btn-primary btn-rounded">
                                <label
                                  className="form-label text-white m-1"
                                  htmlFor="profilePic"
                                >
                                  Choose file
                                </label>
                                {/* <input type="file" className="form-control d-none" id="customFile2" /> */}
                                <input
                                  type="file"
                                  id="profilePic"
                                  name="profilePic"
                                  onChange={(e) => {
                                    setImage1(e.target.files[0]);
                                    setFieldValue(
                                      'profilePic',
                                      e.target.files[0]
                                    );
                                  }}
                                  onBlur={handleBlur}
                                  className={
                                    errors.profilePic && touched.profilePic
                                      ? 'form-control d-none input-error'
                                      : 'form-control d-none'
                                  }
                                />
                              </div>
                            </div>
                            {errors.profilePic && touched.profilePic && (
                              <p className="red-error ">{errors.profilePic}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <label className="d-flex justify-content-center OTP-textcolour">
                            Aadhar Front Photo
                          </label>
                          <div>
                            <div className="mb-4 d-flex justify-content-center">
                              <img
                                src={
                                  image2
                                    ? URL.createObjectURL(image2)
                                    : 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
                                }
                                alt="example placeholder"
                                style={{ width: '300px' }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div className="btn btn-primary btn-rounded">
                                <label
                                  className="form-label text-white m-1"
                                  htmlFor="aadharFront"
                                >
                                  Choose file
                                </label>
                                <input
                                  type="file"
                                  id="aadharFront"
                                  name="aadharFront"
                                  onChange={(e) => {
                                    setImage2(e.target.files[0]);
                                    setFieldValue(
                                      'aadharFront',
                                      e.target.files[0]
                                    );
                                  }}
                                  onBlur={handleBlur}
                                  className={
                                    errors.aadharFront && touched.aadharFront
                                      ? 'form-control d-none input-error'
                                      : 'form-control d-none'
                                  }
                                />
                              </div>
                            </div>{' '}
                            {errors.aadharFront && touched.aadharFront && (
                              <p className="red-error">{errors.aadharFront}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline mb-3">
                            <label className="form-label">Aadhar Number</label>
                            <input
                              type="text"
                              id="aadharNumber"
                              value={values.aadharNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.aadharNumber && touched.aadharNumber
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />

                            {errors.aadharNumber && touched.aadharNumber && (
                              <p className="red-error">{errors.aadharNumber}</p>
                            )}
                          </div>
                          <div className="form-outline mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                              type="text"
                              id="address"
                              value={values.address}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.address && touched.address
                                  ? 'form-control form-control-lg input-error'
                                  : 'form-control form-control-lg'
                              }
                            />

                            {errors.address && touched.address && (
                              <p className="red-error">{errors.address}</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <label className="d-flex justify-content-center OTP-textcolour">
                            Aadhar Back Photo
                          </label>
                          <div>
                            <div className="mb-4 d-flex justify-content-center">
                              <img
                                src={
                                  image3
                                    ? URL.createObjectURL(image3)
                                    : 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
                                }
                                alt="example placeholder"
                                style={{ width: '300px' }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div className="btn btn-primary btn-rounded">
                                <label
                                  className="form-label text-white m-1"
                                  htmlFor="aadharBack"
                                >
                                  Choose file
                                </label>
                                <input
                                  type="file"
                                  id="aadharBack"
                                  name="aadharBack"
                                  onChange={(e) => {
                                    setImage3(e.target.files[0]);
                                    setFieldValue(
                                      'aadharBack',
                                      e.target.files[0]
                                    );
                                  }}
                                  onBlur={handleBlur}
                                  className={
                                    errors.aadharBack && touched.aadharBack
                                      ? 'form-control d-none input-error'
                                      : 'form-control d-none'
                                  }
                                />
                              </div>
                            </div>{' '}
                            {errors.aadharBack && touched.aadharBack && (
                              <p className="red-error">{errors.aadharBack}</p>
                            )}
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
      )}
    </div>
  );
}

export default TrainerVerificationUpload;
