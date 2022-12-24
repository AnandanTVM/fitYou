import React, { useEffect } from 'react';
import { ClientNav, FreeVideos } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { ClientLoginInfo } from '../redux/adminReducer';
function ClientHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      console.log(user);
      dispatch(ClientLoginInfo(user));
      if (!user) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <ClientNav home />
      <FreeVideos/>
    </div>
  );
}

export default ClientHome;
