import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerNav, VideoChat } from '../Components';
import { useSelector } from 'react-redux';

function TrainerVideoChat() {
  const navigate = useNavigate();
  const { trainerDetails } = useSelector((state) => state.admin);
  console.log('trr');
  console.log(trainerDetails);
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
      <TrainerNav chat />
      <VideoChat trainer name={trainerDetails.name} />
    </div>
  );
}

export default TrainerVideoChat;
