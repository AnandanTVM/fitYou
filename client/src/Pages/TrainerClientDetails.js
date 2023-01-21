import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerAllotedClient, TrainerNav } from '../Components';
function TrainerClientDetails() {
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
        <TrainerNav clientinfo/>
        <TrainerAllotedClient/>
    </div>
  )
}

export default TrainerClientDetails