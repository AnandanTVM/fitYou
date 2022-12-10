import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ALogin, NavHome } from '../Components';
import jwt from 'jwt-decode';
function AdminLogin() {
  const navigate = useNavigate('');
  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    if (token) {
      console.log('here');
      const user = jwt(token);
      console.log('iam here');
      console.log(user);
      console.log(token);
      if (user) {
        navigate('/adminHome');
      }
    } else {
      navigate('/adminlogin');
    }
  }, [navigate]);
  return (
    <div>
      <NavHome login />
      <ALogin />
    </div>
  );
}

export default AdminLogin;
