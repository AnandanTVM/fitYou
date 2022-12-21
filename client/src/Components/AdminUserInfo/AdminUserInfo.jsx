import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';

import {
  getUserInfo,
  blockunsrinfo,
  unBlockuserinfo,
} from '../../axios/serives/AdminServices';

function AdminUserInfo() {
  const navigate = useNavigate();
  const [details, SetDetails] = useState();

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getUserInfo(token);
      SetDetails(data.clientDetails);
    }
  }, []);
  console.log(details);
  async function unBlock(id) {
    const token = localStorage.getItem('Admintoken');
    const data = await unBlockuserinfo(token, id);
    if (data.unBlock) {
      SetDetails(data.userDetails);
    }
  }
  async function Block(id) {
    const token = localStorage.getItem('Admintoken');
    const data = await blockunsrinfo(token, id);
    if (data.block) {
      console.log(data);
      SetDetails(data.userDetails);
    }
    console.log(id);
  }
  const columns = [
    {
      name: 'Name',
      selector: (row) => row.fname + '  ' + row.lname,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Phome',
      selector: (row) => row.phone,
    },
    {
      name: 'Block/Unblock',
      selector: (row) => {
        return (
          <div>
            {' '}
            {row.block ? (
              <button
                className="btn btn-danger"
                onClick={() => unBlock(row._id)}
              >
                Un Block
              </button>
            ) : (
              <button className="btn btn-danger" onClick={() => Block(row._id)}>
                Block
              </button>
            )}
          </div>
        );
      },
    },
    {
      name: 'View More',
      selector: (row) => {
        return (
          <div>
            {' '}
            <button
              className="btn btn-info"
              onClick={() => {
                navigate(`/adminClientEdit/${row._id}`);
              }}
            >
              More Details
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container">
      <div className="row mt-4">
        <h1> User Informations</h1>
      </div>
      <DataTable
        columns={columns}
        data={details}
        fixedHeader
        fixedHeaderScrollHeight="500px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        pagination
      />
    </div>
  );
}

export default AdminUserInfo;
