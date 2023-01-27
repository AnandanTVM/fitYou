import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  getAllMessage,
  sendMessage,
} from '../../axios/serives/TrainerServices';
import './TrainerChat.css';
function TrainerChatArea() {
  const { clientDetails } = useSelector((state) => state.trainer);
  const scrollRef = useRef();
  const [chatDataFrom, setChatDataFrom] = useState('');
  const [chat, setChat] = useState('');
  const [message, setMessage] = useState('');
  async function feachData() {
    const token = localStorage.getItem('trainertoken');
    const data = await getAllMessage(token, clientDetails._id);
    console.log(data);
    setChatDataFrom(data.from);
    setChat(data.messages);
    console.log(data);
  }
  useEffect(() => {
    feachData();
  }, [clientDetails]);

  async function SendMessage() {
    console.log('here');
    const token = localStorage.getItem('trainertoken');

    await sendMessage(token, clientDetails._id, message).then(() => {
      feachData();
    });

    setMessage('');
  }
  useEffect(() => {
    scrollRef.current?.scrollIntoView(false);
  }, [chat]);
  return (
    <>
      {clientDetails ? (
        <>
          <div className="chat-area">
            <div className="chat-area-header">
              <div className="chat-area-title">
                {' '}
                {clientDetails.fname} {clientDetails.lname}
              </div>
              <div className="chat-area-group"></div>
            </div>
            {/* chat Start */}
            <div
              className="rapper"
              //  style={{ marginBottom: '5rem ' }}
            >
              {chat
                ? chat.map((data, index) => {
                    if (data._id === chatDataFrom) {
                      return (
                        <div key={index} className="chat-area-main">
                          <div className="chat-msg owner">
                            <div className="chat-msg-profile">
                              <img
                                className="chat-msg-img"
                                src={
                                  clientDetails.ProfilePic
                                    ? clientDetails.ProfilePic
                                    : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                                }
                                alt=""
                              />
                              <div className="chat-msg-date">
                                {data.messages.time}
                              </div>
                            </div>
                            <div className="chat-msg-content">
                              <div className="chat-msg-text">
                                {data.messages.message}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index} className="chat-msg">
                          <div className="chat-msg-profile">
                            <img
                              className="chat-msg-img"
                              src={
                                clientDetails.ProfilePic
                                  ? clientDetails.ProfilePic
                                  : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                              }
                              alt=""
                            />
                            <div className="chat-msg-date">
                              {data.messages.time}
                            </div>
                          </div>
                          <div className="chat-msg-content">
                            <div className="chat-msg-text">
                              {data.messages.message}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                : ''}
              <div ref={scrollRef}></div>
            </div>
            {/* chat end */}
            <div className="chat-area-footer">
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Type something here..."
              />
              <img
                src="https://img.icons8.com/fluency/48/null/sent.png"
                alt="Send"
                title="Send Message"
                onClick={SendMessage}
              />
            </div>
          </div>
          <div className="detail-area">
            <div className="detail-area-header">
              <div className="msg-profile group">
                <img
                  className="chat-msg-img"
                  src={
                    clientDetails.ProfilePic
                      ? clientDetails.ProfilePic
                      : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                  }
                  alt=""
                />
              </div>
              <div className="detail-title">
                {clientDetails.fname} {clientDetails.lname}
              </div>
              <div className="detail-subtitle">Online</div>
              <div className="detail-buttons">
                <button className="detail-button">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-video"
                  >
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  Video Chat
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="chat-area ME-5 ">
          {' '}
          <div className="chatImage me-5 py-5">
            <img
              className="chat-notfount"
              src="https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674555962/Hi_Robot_Sticker_-_Hi_Robot_-_Discover_Share_GIFs_ifpprp.gif"
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

export default TrainerChatArea;
