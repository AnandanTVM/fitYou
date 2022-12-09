import React, { useEffect } from 'react';
import { TrainerApprovel,AdminNav } from '../Components'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';

function AdminTrainerAprovel() {
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
        <AdminNav authentication />
        <TrainerApprovel/>
    </div>
  )
}

export default AdminTrainerAprovel