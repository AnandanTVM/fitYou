import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavHome, TLoginOTP } from '../Components';
import jwt from 'jwt-decode';

function TrainerOtpLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('trainertoken');
    if (token) {
      const user = jwt(token);
      console.log('iam here');
      console.log(user);
      console.log(token);
      if (user) {
        navigate('/trainer');
      }
    } else {
      navigate('/login/trainerOTP');
    }
  }, [navigate]);
  return (
    <div>
      <NavHome login />
      <TLoginOTP />
    </div>
  );
}

export default TrainerOtpLogin;
