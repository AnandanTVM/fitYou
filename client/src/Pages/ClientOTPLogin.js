import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavHome, CLoginOTP } from '../Components';
import jwt from 'jwt-decode';
function ClientOTPLogin() {
  console.log('onLogin');
  const navigate = useNavigate();
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
      navigate('/login/ClientOTP');
    }
  }, [navigate]);
  return (
    <div>
      <NavHome />
      <CLoginOTP />
    </div>
  );
}

export default ClientOTPLogin;
