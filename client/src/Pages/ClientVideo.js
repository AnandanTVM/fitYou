import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { ClientNav, FreeVideos } from '../Components';
function ClientVideo() {
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
      <ClientNav video />
      <FreeVideos />
    </div>
  );
}

export default ClientVideo;
