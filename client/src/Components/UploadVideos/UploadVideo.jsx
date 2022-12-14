import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { uploadVideo } from '../../axios/serives/AdminServices';
import { uploadVideoSchema } from '../../validation/homeValidation';
function UploadVideo() {
  const { adminDetails } = useSelector((state) => state.admin);
  // console.log(adminDetails);

  const navigate = useNavigate();
 const [image,setImage]=useState();
  const [error, setError] = useState('');
  const onSubmit = async (values, actions) => {
    console.log(values,actions);
     values.creatorId=adminDetails.userId;
     
     const token = localStorage.getItem('Admintoken');
    const status = await uploadVideo(token,values);
    if (status.status === 'error') {
      setError('Please try again after some time.');
    } else if (status.status === 'success') {
      navigate('/adminHome');
       // actions.resetForm()
    }
   

  };
  const { values, errors, setFieldValue, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: '',
        discretion: '',
        type: '',
        link: '',
        thumbnail: '',
      },
      validationSchema: uploadVideoSchema,
      onSubmit,
    });
  //   console.log(errors);
  let ytlink;
  if (values.link) {
    ytlink = values.link.replace('/watch?v=', '/embed/');
  }

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-3">
            <div className="col-md-6 col-sm-12 mt-4 mb-3">
              <div className='row'>
              <h3>Video Peview</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={ytlink}
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
              </div>
              <div className='row'>
              <h3>Thumbnail Peview</h3>
              <div className="ratio ratio-16x9">
              {image ? <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img> : ""}
              </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <section className=" gradient-custom">
                <div className="container py-5 h-100">
                  <div
                    className="card shadow-2-strong card-registration"
                    style={{ borderRadius: '15px' }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Upload Videos
                      </h3>
                      {error ? <p className="red-error">{error}</p> : ''}
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="">
                            <div className="form-outline mb-3">
                              <label className="form-label">YouTube Link</label>
                              <input
                                type="text"
                                id="link"
                                value={values.link}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.link && touched.link
                                    ? 'form-control form-control-lg input-error'
                                    : 'form-control form-control-lg'
                                }
                              />

                              {errors.link && touched.link && (
                                <p className="red-error">{errors.link}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="">
                            <div className="form-outline mb-3">
                              <label className="form-label">Title</label>
                              <input
                                type="text"
                                id="title"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                  errors.title && touched.title
                                    ? 'form-control form-control-lg input-error'
                                    : 'form-control form-control-lg'
                                }
                              />

                              {errors.title && touched.title && (
                                <p className="red-error">{errors.title}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="">
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
                                <p className="red-error">{errors.discretion}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <h6 className="mb-2 pb-1">Video Type: </h6>

                            <div
                              className="form-check form-check-inline"
                              id="clr"
                            >
                              <input
                                className="form-check-input inputColor"
                                type="radio"
                                name="type"
                                value="Free"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <label className="form-check-label">Free</label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input inputColor"
                                type="radio"
                                name="type"
                                value="Public"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <label className="form-check-label">Public</label>
                            </div>

                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input inputColor"
                                type="radio"
                                name="type"
                                value="Private"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <label className="form-check-label">
                                Private
                              </label>
                            </div>

                            {errors.type && touched.type && (
                              <p className="red-error">{errors.type}</p>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="">
                            <div className="form-outline mb-3">
                              <label className="form-label">Thumbnail</label>
                              <input
                                type="file"
                                id="thumbnail"
                                onChange={(e)=>{setFieldValue("thumbnail",e.target.files[0])
                                setImage(e.target.files[0])}}
                                onBlur={handleBlur}
                                className={
                                  errors.thumbnail && touched.thumbnail
                                    ? 'form-control form-control-lg input-error'
                                    : 'form-control form-control-lg'
                                }
                              />

                              {errors.thumbnail && touched.thumbnail && (
                                <p className="red-error">{errors.thumbnail}</p>
                              )}
                            </div>
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
                          <input
                            className="btn btn-primary btn-lg"
                            type="submit"
                            value="Submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
