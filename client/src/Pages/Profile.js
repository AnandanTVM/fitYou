import React, { useEffect } from 'react';
import { ClientNav, ClientProfile } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';

function Profile() {
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
      <ClientNav />
      <ClientProfile />
    </div>
  );
}

export default Profile;
