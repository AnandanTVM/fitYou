import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import AdminNav from '../Components/AdminNav/AdminNav';
function AdminHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    if (token) {
      const user = jwt(token);

      // setUserName(user.name);

      if (!user) {
        localStorage.removeItem('Admintoken');
        navigate('/adminLogin');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/adminLogin');
    }
  }, [navigate]);
  return (
    <div>
      <AdminNav home />
    </div>
  );
}

export default AdminHome;
