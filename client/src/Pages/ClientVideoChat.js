import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { ClientNav, VideoChat } from '../Components';

function ClientVideoChat() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <ClientNav chat />
      <VideoChat client />
    </div>
  );
}

export default ClientVideoChat;
