import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllClientInfo } from '../../axios/serives/TrainerServices';
import { getClientDetails } from '../../redux/trainerReducer';
import './TrainerChat.css';
import TrainerChatArea from './TrainerChatArea';
function TrainerChat() {
  const dispatch = useDispatch();
  const [clientDetails, SetClientDetails] = useState('');
  const [err, setErr] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('trainertoken');
    featchData();
    async function featchData() {
      let Details = await getAllClientInfo(token);
      console.log(Details);
      if (Details.status) {
        SetClientDetails(Details.clientDetails);
      } else {
        setErr('No clients currently available....');
      }
    }
  }, []);
  console.log(clientDetails);
  console.log(err);
  return (
    <div className="trainer-chat">
      <div className="app">
        <div className="wrapper">
          <div className="conversation-area">
            {/* active online */}
            <div>
              {clientDetails ? (
                clientDetails.map((data, index) => {
                  return (
                    <div
                      className="msg   "
                      key={index}
                      onClick={() => {
                        dispatch(getClientDetails(data.Clientdetails));
                      }}
                    >
                      <img
                        className="msg-profile "
                        src={
                          data.Clientdetails.ProfilePic
                            ? data.Clientdetails.ProfilePic
                            : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                        }
                        alt=""
                      />
                      <div className="msg-detail">
                        <div className="msg-username">
                          {data.Clientdetails.fname} {data.Clientdetails.lname}
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

          <TrainerChatArea />
        </div>
      </div>
    </div>
  );
}

export default TrainerChat;
