import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerNav } from '../Components';
import { useDispatch } from 'react-redux';
import { trainerLoginInfo } from '../redux/adminReducer';
function TrainerHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('trainertoken');
    if (token) {
      const user = jwt(token);
      console.log(user);
      dispatch(trainerLoginInfo(user));
      if (!user) {
        localStorage.removeItem('trainertoken');
        navigate('/trainerLogin');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/trainerLogin');
    }
  }, [dispatch, navigate]);
  return (
    <div>
      <TrainerNav home />
    </div>
  );
}

export default TrainerHome;
