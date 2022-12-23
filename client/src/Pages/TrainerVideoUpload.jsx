import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerNav, UploadVideo } from '../Components';

function TrainerVideoUpload() {
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
      <TrainerNav upload />
      <UploadVideo trainer />
    </div>
  );
}

export default TrainerVideoUpload;
