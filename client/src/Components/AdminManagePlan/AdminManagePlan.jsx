import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { trainerDetailsEdit } from '../../redux/adminReducer';
// import jwt from 'jwt-decode';
import { getallPlans } from '../../axios/serives/AdminServices';
import DataTable from 'react-data-table-component';

function AdminManagePlan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [details, SetDetails] = useState();

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getallPlans(token);
      SetDetails(data.planDetails);
    }
  }, [dispatch]);
  const columns = [
    {
      name: 'Package Name',
      selector: (row) => row.PackageName,
    },
    {
      name: 'Valid For',
      selector: (row) => row.validfor,
    },
    {
      name: 'package Type',
      selector: (row) => row.packageType,
    },
    {
      name: 'Offer Rate',
      selector: (row) => {
        return <div style={{ color: 'red' }}>₹ {row.offerRate} /-</div>;
      },
    },
    {
      name: 'Remove',
      selector: (row) => {
        return (
          <div>
            <button
              className="btn "
              onClick={() => {
                navigate(`/trainerdetailsview/${row._id}`);
              }}
            >
              🗑️
            </button>
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
    <div>
      <div>
        <div className="container">
          <div className="row mt-4">
            <h1> Manage Packages</h1>
          </div>
          <DataTable
            columns={columns}
            data={details}
            fixedHeader
            fixedHeaderScrollHeight="400px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            pagination
          />
        </div>
      </div>
    </div>
  );
}

export default AdminManagePlan;
