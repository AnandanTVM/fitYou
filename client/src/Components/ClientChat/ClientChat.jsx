
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTrainerDetails } from '../../axios/serives/UserServices';
import { getChatTrainerDetails } from '../../redux/clientReducers';
import './ClientChat.css'
import ClientChatArea from './ClientChatArea';
function Chat() {
   const dispatch = useDispatch();
  const [trainerDetails, SetTrainerDetails] = useState('');
  const [err, setErr] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    featchData();
    async function featchData() {
      
      let Details = await getTrainerDetails(token);
     console.log(Details);
      if (Details.status) {
        SetTrainerDetails(Details.trainerDetails);
      } else {
        setErr('Pls get a trainer...');
      }
    }
  }, []);
  return (
   <div>
     <div className="trainer-chat">
      <div className="app">
        <div className="wrapper">
          <div className="conversation-area">
            {/* active online */}
            <div>
              {trainerDetails ? (
                trainerDetails.map((data, index) => {
                  return (
                    <div
                      className="msg   "
                      key={index}
                      onClick={() => {
                       dispatch(getChatTrainerDetails(data.trainer));
                      }}
                    >
                      <img
                        className="msg-profile "
                        src={
                          data.trainer.profilePic
                            ? data.trainer.profilePic
                            : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                        }
                        alt=""
                      />
                      <div className="msg-detail">
                        <div className="msg-username">
                          {data.trainer.fname} {data.trainer.lname}
                        </div>
                        <div className="msg-content">
                          <span className="msg-message">
                            Click Here To Message
                          </span>
                          {/* <span className="msg-date">20m</span> */}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>{err}</div>
              )}
            </div>
            {/* <div className="msg">
              <img
                className="msg-profile"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
                alt=""
              />
              <div className="msg-detail">
                <div className="msg-username">Miguel Cohen</div>
                <div className="msg-content">
                  <span className="msg-message">
                    Adaptogen taiyaki austin jean shorts brunch
                  </span>
                  <span className="msg-date">20m</span>
                </div>
              </div>
            </div> */}
          </div>
          <ClientChatArea/>

        </div>
      </div>
    </div>
   </div>
  )
}

export default Chat