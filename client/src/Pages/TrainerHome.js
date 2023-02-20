import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { TrainerNav, TrainerVefUpload } from '../Components';
import { useDispatch } from 'react-redux';
import { trainerLoginInfo } from '../redux/adminReducer';
function TrainerHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [verified,setVerified]=useState(false)
  useEffect(() => {
    const token = localStorage.getItem('trainertoken');
    if (token) {
      const user = jwt(token);
      console.log(user);
      dispatch(trainerLoginInfo(user));
      if (!user) {
        localStorage.removeItem('trainertoken');
        navigate('/trainerLogin');
      } else if(user.status==='Verified'){
        setVerified(true)
      }
    } else {
      navigate('/trainerLogin');
    }
  }, [dispatch, navigate]);
  return (
    <div>
     {verified?<TrainerVefUpload/>: <TrainerNav home />}
    </div>
  );
}

export default TrainerHome;
