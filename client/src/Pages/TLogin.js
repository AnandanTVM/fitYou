import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavHome, TrainerLogin } from '../Components';
import jwt from 'jwt-decode';
function TLogin() {
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
        navigate('/trainer');
      }
    } else {
      navigate('/trainerLogin');
    }
  }, [navigate]);
  return (
    <div>
      <NavHome login />
      <TrainerLogin />
    </div>
  );
}

export default TLogin;
