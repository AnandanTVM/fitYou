import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerNav } from '../Components';

function TrainerHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/trainerLogin');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/trainerLogin');
    }
  }, [navigate]);
  return <div>
    <TrainerNav home/>
  </div>;
}

export default TrainerHome;
