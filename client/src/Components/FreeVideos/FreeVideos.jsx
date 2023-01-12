import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '..';
import { getFreeVideo } from '../../axios/serives/UserServices';

import './FreeVideos';

function FreeVideos() {
  const [video, setVideo] = useState('');
  const [error, setError] = useState('');
  const [loder, setLoder] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    feach();

    async function feach() {
      setLoder(true);
      const token = localStorage.getItem('token');
      console.log(token);
      const video = await getFreeVideo(token);

      console.log(video);
      if (video.status) {
        setVideo(video.allvideo);
        setLoder(false);
      } else {
        setLoder(false);
        setError('some thing went wrong pls try againe');
      }
    }
  }, []);

  return (
    <div className="row">
      {loder ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="row mt-5 text-center">
            <h2>Free Videos</h2>
          </div>
          <div className="row lg-12 sm-6">
            <section>
              {error ? <p>error</p> : ''}
              <div class="container py-5">
                <div class="row">
                  {video
                    ? video.map((data, index) => (
                        <div
                          key={index}
                          class="col-md-12 col-lg-4 mt-3 mb-4 mb-lg-0"
                        >
                          <div
                            class="card"
                            onClick={(e) =>
                              navigate(`/Client/Video/view/${data._id}`)
                            }
                          >
                            <div
                              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                              style={{ width: '35px', height: '35px' }}
                            >
                              <p class="text-white mb-0 small">{data.type}</p>
                            </div>
                            <img
                              src={data.thumbnail}
                              class="card-img-top"
                              alt="Laptop"
                            />

                            <div class="card-body">
                              <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">{data.title}</h5>
                                {/* <h5 class="text-dark mb-0">$999</h5> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : ''}
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default FreeVideos;
