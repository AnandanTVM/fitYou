import React from 'react';
import { Banner, NavHome } from '../Components';
// import { useNavigate } from 'react-router-dom';
// import jwt from 'jwt-decode';
function Home() {
  return (
    <div>
      <NavHome home />
      <Banner />
    </div>
  );
}

export default Home;
