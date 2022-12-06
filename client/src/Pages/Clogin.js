import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavHome, Cllogin } from '../Components';
import jwt from 'jwt-decode';
function Clogin() {
  const navigate = useNavigate('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      console.log('iam here');
      console.log(user);
      console.log(token);
      if (user) {
        navigate('/clientHome');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <NavHome login />
      <Cllogin />
    </div>
  );
}

export default Clogin;
