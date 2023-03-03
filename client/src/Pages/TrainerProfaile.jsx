import React,{ useEffect } from 'react';
import { TrainerNav, TrainerProf } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';

export default function TrainerProfaile() {
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
  return <div>
    <TrainerNav profile />
    <TrainerProf/>
  </div>;
}
