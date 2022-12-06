import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AdminHome,
  AdminLogin,
  AdminUserInfo,
  ClientHome,
  Clogin,
  E404,
  Home,
  Signup,
  TLogin,
  TrSignup,
} from './Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Clogin />} />
        <Route path="/trainerSignup" element={<TrSignup />} />
        <Route path="/trainerLogin" element={<TLogin />} />
        <Route path="/clientHome" element={<ClientHome />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/userInfo" element={<AdminUserInfo />} />
        <Route path="/*" element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
