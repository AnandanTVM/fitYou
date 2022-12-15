import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { AdminAddPlan, AdminNav } from '../Components';

function AdminNewPackages() {
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
      <AdminNav packages />
      <AdminAddPlan />
    </div>
  );
}

export default AdminNewPackages;
