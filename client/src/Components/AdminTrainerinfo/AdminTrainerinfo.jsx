import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';

// import jwt from 'jwt-decode';
import {
  getActiveTrainerInfo,
  unBlockTrainer,
  blockTrainer,
} from '../../axios/serives/AdminServices';

function AdminTrainerinfo() {
  const navigate = useNavigate();
  const [details, SetDetails] = useState();

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getActiveTrainerInfo(token);
      SetDetails(data.activetrainerDetails);
    }
  }, []);
  console.log(details);
  async function unBlock(id) {
    const token = localStorage.getItem('Admintoken');
    const data = await unBlockTrainer(token, id);
    if (data.unBlock) {
      SetDetails(data.trainerDetails);
    }
  }
  async function Block(id) {
    const token = localStorage.getItem('Admintoken');
    const data = await blockTrainer(token, id);
    if (data.block) {
      console.log(data);
      SetDetails(data.trainerDetails);
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
      name: 'status',
      selector: (row) => {
        return <div style={{ color: 'green' }}> {row.status}</div>;
      },
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
                navigate(`/trainerdetailsview/${row._id}`);
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
        <h1> Trainer Informations</h1>
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

export default AdminTrainerinfo;
