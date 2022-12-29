import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import {
  ClientNav,
  ClientPlanPayment,
  ClientSelectTrainer,
} from '../Components';
import { useSelector } from 'react-redux';
function ClientPlanConformation() {
  const { selectedTrainerdetails } = useSelector((state) => state.client);
  if (selectedTrainerdetails) {
    console.log('unde');
  } else {
    console.log('ella da');
  }
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        // populateQuote()
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      <ClientNav plan />
      <div>
        {selectedTrainerdetails ? (
          <ClientPlanPayment />
        ) : (
          <ClientSelectTrainer />
        )}
      </div>
    </div>
  );
}

export default ClientPlanConformation;
