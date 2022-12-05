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

      // setUserName(user.name);

      if (!user) {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <ClientNav home />
    </div>
  );
}

export default ClientHome;
