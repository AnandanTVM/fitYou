import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { ClientNav, VideoChat } from '../Components';
import { useSelector } from 'react-redux';

function ClientVideoChat() {
  const navigate = useNavigate();

  const { clientDetails } = useSelector((state) => state.admin);
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
      <VideoChat client name={clientDetails.name} />
    </div>
  );
}

export default ClientVideoChat;
