/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';
import {
  getAllMessage,
  sendChatMessage,
} from '../../axios/serives/UserServices';
import jwt from 'jwt-decode';
import swal from 'sweetalert';
import io from 'socket.io-client';
import './ClientChat.css';
import { useNavigate } from 'react-router-dom';
const ENDPOINT = `${process.env.REACT_APP_END_POINT}`;
function ClientChatArea() {
  const { TrainerDetails } = useSelector((state) => state.client);
  const { clientDetails } = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [chatDataFrom, setChatDataFrom] = useState('');
  const [chat, setChat] = useState('');
  const [message, setMessage] = useState('');
  const [arrvelmessage, setArrvelMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();
  let user = jwt(localStorage.getItem('token'));

  async function feachData() {
    const token = localStorage.getItem('token');
    const data = await getAllMessage(token, TrainerDetails._id);
    if (data.messages) {
      setChatDataFrom(data.from);
      setChat(data.messages);
    } else {
      setChat(false);
    }
  }
  async function SendMessage() {
    const token = localStorage.getItem('token');

    socket.current.emit('sendMessage', {
      senderId: user.userId,
      receverId: TrainerDetails._id,
      text: message,
    });
    await sendChatMessage(token, TrainerDetails._id, message).then(() => {
      feachData();
    });

    setMessage('');
  }

  // socket io
  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on('getMessage', (data) => {
      console.log('on dtat');
      console.log(data);
      setArrvelMessage({
        _id: data.senderId,
        messages: {
          message: data.text,
          realtime: Date.now(),
        },
      });
    });
  }, []);
  useEffect(() => {
    arrvelmessage && setChat((prev) => [...prev, arrvelmessage]);
    console.log(chat);
  }, [arrvelmessage]);
  useEffect(() => {
    socket.current.emit('addUser', user.userId);
    socket.current.on('getUsers', (users) => {
      console.log(users);
    });
  }, [user.userId]);

  useEffect(() => {
    if (TrainerDetails) {
      feachData();
    }
  }, [TrainerDetails]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);
  return (
    <>
      {TrainerDetails ? (
        <>
          <div className="chat-area me-5 ">
            <div className="chat-area-header">
              <div className="chat-area-title">
                {' '}
                {TrainerDetails.fname} {TrainerDetails.lname}
              </div>
              <div className="chat-area-group">
                <h3
                  onClick={(e) => {
                    navigate(
                      `/videoChat/${clientDetails.name + clientDetails.userId}`
                    );
                  }}
                >
                  📹
                </h3>
              </div>
            </div>
            {/* chat Start */}

            <div
              className="rapper"
            //  style={{ marginBottom: '5rem ' }}
            >
              {chat ? (
                chat.map((data, index) => {
                  if (data._id === chatDataFrom) {
                    return (
                      <div key={index} className="chat-area-main">
                        <div className="chat-msg owner">
                          <div className="chat-msg-profile">
                            <img
                              className="chat-msg-img"
                              src={
                                TrainerDetails.profilePic
                                  ? TrainerDetails.profilePic
                                  : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                              }
                              alt=""
                            />
                            <div className="chat-msg-date">
                              {format(data.messages.realtime)}
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
                              TrainerDetails.ProfilePic
                                ? TrainerDetails.ProfilePic
                                : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                            }
                            alt=""
                          />
                          <div className="chat-msg-date">
                            {format(data.messages.realtime)}
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
              ) : (
                <div className="chatImage me-5 py-5">
                  <img
                    className="chat-notfount"
                    src="https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674555962/Hi_Robot_Sticker_-_Hi_Robot_-_Discover_Share_GIFs_ifpprp.gif"
                    alt=""
                  />
                </div>
              )}
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
                onClick={((e) => {
                  if (message === '') {

                  } else {
                    SendMessage()
                  }
                })}
              />
            </div>
          </div>
          <div className="detail-area">
            <div className="detail-area-header">
              <div className="msg-profile group">
                <img
                  className="chat-msg-img"
                  src={
                    TrainerDetails.profilePic
                      ? TrainerDetails.profilePic
                      : 'https://res.cloudinary.com/ddtcmyvhx/image/upload/v1674546681/favicon_mqlyjv.png'
                  }
                  alt=""
                />
              </div>
              <div className="detail-title">
                {TrainerDetails.fname} {TrainerDetails.lname}
              </div>
              <div className="detail-subtitle">Online</div>
              <div className="detail-buttons">
                <button
                  className="detail-button"
                  onClick={(e) => {
                    swal(
                      `Do you want to make a video call with ${TrainerDetails.fname} ${TrainerDetails.lname} ?`,
                      {
                        buttons: ['Oh noez!', 'Call'],
                      }
                    ).then((value) => {
                      if (value) {
                        navigate(
                          `/videoChat/${clientDetails.name + clientDetails.userId
                          }`
                        );
                      }
                    });
                  }}
                >
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

export default ClientChatArea;
