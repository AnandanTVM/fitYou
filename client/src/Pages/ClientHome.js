import React, { useEffect } from 'react';
import { ClientNav } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
function ClientHome() {
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
      <ClientNav home />
    </div>
  );
}

export default ClientHome;
