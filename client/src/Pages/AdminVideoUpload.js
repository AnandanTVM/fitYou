import React, { useEffect } from 'react';
import { AdminNav, UploadVideo } from '../Components';
import jwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
export default function AdminVideoUpload() {
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
      <AdminNav video />
      <UploadVideo admin />
    </div>
  );
}
