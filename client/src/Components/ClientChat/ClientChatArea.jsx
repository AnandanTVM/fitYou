import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAllMessage, sendChatMessage } from '../../axios/serives/UserServices';

import './ClientChat.css'

function ClientChatArea() {
    const { TrainerDetails } = useSelector((state) => state.client);
    console.log(TrainerDetails);
    const [chatDataFrom, setChatDataFrom] = useState('');
    const [chatDataTo, setChatDataTo] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (TrainerDetails) {
            feachData();
        }
        async function feachData() {
            console.log('in gessage ');
            const data = await getAllMessage(token, TrainerDetails._id);
            console.log(data);
            setChatDataFrom(data.toMessage)
            setChatDataTo(data.fromMessage)
        }
    }, [TrainerDetails]);
    async function SendMessage() {

        const token = localStorage.getItem('token');
        const data = await sendChatMessage(token, TrainerDetails._id, message);

        setMessage('');
    }
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
                            <div className="chat-area-group"></div>
                        </div>
                        {/* chat Start */}
                        <div className="chat-area-main">
                            {chatDataFrom ? (chatDataFrom.map((chat, index) => {
                                return (<div className="chat-msg owner">
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
                                        <div className="chat-msg-date">{chat.time}</div>
                                    </div>
                                    <div className="chat-msg-content">
                                        <div className="chat-msg-text">
                                            {chat.message}
                                        </div>
                                    </div>
                                </div>)
                            })) : ''}
                            {chatDataTo ? (chatDataTo.map((chat, index) => {
                                return (<div key={index} className="chat-msg">
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
                                        <div className="chat-msg-date">{chat.time}</div>
                                    </div>
                                    <div className="chat-msg-content">
                                        <div className="chat-msg-text">
                                            {chat.message}
                                        </div>
                                    </div>
                                </div>)
                            })) : ''}
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
    )
}

export default ClientChatArea