import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { uploadVideo } from '../../axios/serives/AdminServices';
import { uploadVideo as trainerVideoupload } from '../../axios/serives/TrainerServices';
import { uploadVideoSchema } from '../../validation/homeValidation';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '..';
function UploadVideo(props) {
  const [loading, setLoding] = useState(false);
  const { trainerDetails } = useSelector((state) => state.admin);
  const { adminDetails } = useSelector((state) => state.admin);
  console.log(trainerDetails);
  const [creatorId, setCreatorId] = useState('');
  useEffect(() => {
    if (props.trainer) {
      setCreatorId(trainerDetails.trainerId);
    }
    if (props.admin) {
      setCreatorId(adminDetails.userId);
    }
  }, [
    adminDetails.userId,
    props.admin,
    props.trainer,
    trainerDetails.trainerId,
  ]);
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [error, setError] = useState('');
  let imageLink = false;

  const onSubmit = async (values, actions) => {
    setLoding(true);
    const formdata = new FormData();
    formdata.append('file', image);
    formdata.append('upload_preset', 'wnpsatvh');
    formdata.append('cloud_name', 'drh9n6s0b');

    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/drh9n6s0b/image/upload',
      formdata
    );

    if (data.url) {
      imageLink = data.url;
      console.log(data.url);
      console.log('image', imageLink);
    }

    if (imageLink) {
      values.thumbnail = imageLink;
      values.creatorId = creatorId;

      if (props.trainer) {
        const token = localStorage.getItem('trainertoken');
        values.status = 'Pending';
        const status = await trainerVideoupload(token, values);
        if (status.status === 'error') {
          setLoding(false);
          setError('Please try again after some time.');
        } else if (status.status === 'success') {
          setLoding(false);
          navigate('/trainer');
          // actions.resetForm()
        }
      } else if (props.admin) {
        const token = localStorage.getItem('Admintoken');
        const status = await uploadVideo(token, values);
        if (status.status === 'error') {
          setLoding(false);
          setError('Please try again after some time.');
        } else if (status.status === 'success') {
          setLoding(false);
          navigate('/adminHome');
          // actions.resetForm()
        }
      }
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
      title: '',
      discretion: '',
      type: '',
      link: '',
      thumbnail: '',
    },
    validationSchema: uploadVideoSchema,
    onSubmit,
  });

  const uploadImage = (e) => {
    setFieldValue('thumbnail', e.target.files[0]);
    setImage(e.target.files[0]);
  };
  let ytlink;
  if (values.link) {
    ytlink = values.link.replace('/watch?v=', '/embed/');
  }

  return (
    <div>
      <div className="container">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div>
            <div className="row mt-3">
              <div className="col-md-6 col-sm-12 mt-4 mb-3">
                <div className="row">
                  <h3>Video Peview</h3>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={ytlink}
                      title="YouTube video"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="row">
                  <h3>Thumbnail Peview</h3>
                  <div className="ratio ratio-16x9">
                    {image ? (
                      <img
                        alt="Posts"
                        width="200px"
                        height="200px"
                        src={image ? URL.createObjectURL(image) : ''}
                      ></img>
                    ) : (
                      ''
                    )}
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
                                <label className="form-label">
                                  YouTube Link
                                </label>
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
                                  <p className="red-error">
                                    {errors.discretion}
                                  </p>
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
                                <label className="form-check-label">
                                  Public
                                </label>
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
                                  name="thumbnail"
                                  onChange={uploadImage}
                                  onBlur={handleBlur}
                                  className={
                                    errors.thumbnail && touched.thumbnail
                                      ? 'form-control form-control-lg input-error'
                                      : 'form-control form-control-lg'
                                  }
                                />

                                {errors.thumbnail && touched.thumbnail && (
                                  <p className="red-error">
                                    {errors.thumbnail}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

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
        )}
      </div>
    </div>
  );
}

export default UploadVideo;
