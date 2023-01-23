import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerNav, TrainerClientDetails } from '../Components';

function TrainerViewClientDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('trainertoken');
    if (token) {
      const user = jwt(token);
      if (!user) {
        localStorage.removeItem('trainertoken');
        navigate('/trainerLogin');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/trainerLogin');
    }
  }, [navigate]);
  return (
    <div>
      <TrainerNav clientinfo />
      <TrainerClientDetails />
    </div>
  );
}

export default TrainerViewClientDetails;
