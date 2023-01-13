import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getVideo } from '../../axios/serives/UserServices';

function ViewVideo() {
  let videoId = useParams();
  const [video, setVideo] = useState();
  useEffect(() => {
    const token = localStorage.getItem('token');
    feachData();
    async function feachData() {
      const data = await getVideo(token, videoId.id);
    setVideo(data.video)

    }
  }, [videoId])
  return (
    <div>
      {video?<div className="Csignup-Main">
        <section className=" gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration">
                  <div class="ratio ratio-16x9 ">
                    <iframe
                      src={video.link}
                      title="YouTube video"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="card-body p-4 p-md-5">
                    <h4 className="mb-4 pb-2 pb-md-0 mb-md-5">
                     {video.title}
                    </h4>

                    <div className="row">
                      
                          <label className="d-flex ">{video.type}</label>
                       
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="d-flex ">{video.discretion}</label>
                        </div>
                      </div>

                     
                    </div>
                   
                    
                   

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>:''}
    </div>
  );
}

export default ViewVideo;
