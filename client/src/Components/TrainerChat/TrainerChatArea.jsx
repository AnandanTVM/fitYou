import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  getAllMessage,
  sendMessage,
} from '../../axios/serives/TrainerServices';
import jwt from 'jwt-decode';
import './TrainerChat.css';
import io from 'socket.io-client';
import { format } from 'timeago.js';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
const ENDPOINT = `${process.env.REACT_APP_END_POINT}`;

function TrainerChatArea() {
  const { clientDetails } = useSelector((state) => state.trainer);
  const scrollRef = useRef();
  const [chatDataFrom, setChatDataFrom] = useState('');
  const [chat, setChat] = useState('');
  const [message, setMessage] = useState('');
  const [arrvelmessage, setArrvelMessage] = useState(null);
  const [online, setOnline] = useState(false);
  const socket = useRef();

  const navigate = useNavigate();

  async function feachData() {
    const token = localStorage.getItem('trainertoken');
    const data = await getAllMessage(token, clientDetails._id);
    if (data.messages) {
      setChatDataFrom(data.from);
      setChat(data.messages);
    } else {
      setChat(false);
    }
  }
  useEffect(() => {
    feachData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientDetails]);

  // socket io
  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on('getMessage', (data) => {
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
  }, [arrvelmessage]);

  let user = jwt(localStorage.getItem('trainertoken'));
  console.log('tocken ');
  console.log(user.trainerId);
  useEffect(() => {
    socket.current.emit('addUser', user.trainerId);
    socket.current.on('getUsers', (users) => {
      console.log(users);
      users.forEach((user) => {
        if (user.userId === clientDetails._id) {
          console.log('online');
          setOnline(true);
        } else {
          setOnline(false);
        }
      });
    });
  }, [clientDetails._id, user.trainerId, user.userId]);

  async function SendMessage() {
    console.log('here');
    const token = localStorage.getItem('trainertoken');
    socket.current.emit('sendMessage', {
      senderId: user.trainerId,
      receverId: clientDetails._id,
      text: message,
    });
    await sendMessage(token, clientDetails._id, message).then(() => {
      feachData();
    });

    setMessage('');
  }
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
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
              <div className="chat-area-group">
                <h3
                  onClick={(e) => {
                    navigate(
                      `/trainer/videoChat/${clientDetails.fname}${clientDetails._id}`
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
                                clientDetails.ProfilePic
                                  ? clientDetails.ProfilePic
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
                              clientDetails.ProfilePic
                                ? clientDetails.ProfilePic
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
                onClick={((e)=>{
                  if(message===''){

                  }else{
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
              <div className="detail-subtitle">{online ? 'Online' : ''}</div>
              <div className="detail-buttons">
                <button
                  className="detail-button"
                  onClick={(e) => {
                    swal(
                      `Do you want to make a video call with ${clientDetails.fname} ${clientDetails.lname}?`,
                      {
                        buttons: ['Oh noez!', 'Call'],
                      }
                    ).then((value) => {
                      if (value) {
                        navigate(
                          `/trainer/videoChat/${clientDetails.fname}${clientDetails._id}`
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
        <div className="chat-area me-5 ">
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
