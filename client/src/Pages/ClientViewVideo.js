import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { ClientNav, ViewVideo } from '../Components';
function ClientViewVideo() {
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
      <ViewVideo />
    </div>
  );
}

export default ClientViewVideo;
