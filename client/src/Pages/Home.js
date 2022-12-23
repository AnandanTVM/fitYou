import React, { useEffect, useState } from 'react';
import { Banner, Loading, NavHome, Plans } from '../Components';
// import { useNavigate } from 'react-router-dom';
// import jwt from 'jwt-decode';

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <NavHome home />
          <Banner />
          <Plans />
        </div>
      )}
    </div>
  );
}

export default Home;
