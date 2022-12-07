import React from 'react';
import { UserEdit } from '../Components';
import AdminNav from '../Components/AdminNav/AdminNav';

function AdminClientEdit() {
  return (
    <div>
      <AdminNav authentication />
      <UserEdit />
    </div>
  );
}

export default AdminClientEdit;
