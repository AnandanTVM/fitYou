import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { detailsEdit, detailsStore } from '../../redux/adminReducer';
// import jwt from 'jwt-decode';
import { getUserInfo } from '../../axios/serives/AdminServices';

import './AdminUserInfo';

function AdminUserInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [details, SetDetails] = useState();

  useEffect(() => {
    const token = localStorage.getItem('Admintoken');
    fetchData();

    async function fetchData() {
      const data = await getUserInfo(token);
      SetDetails(data.clientDetails);
      dispatch(detailsStore(data.clientDetails));
    }
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row mt-4">
        <h1> User Informations</h1>
      </div>
      <div className="row">
        <div>
          <table className="table">
            <thead>
              <tr
                className="table-warning"
                style={{ backgroundColor: '#ef553b' }}
              >
                <th scope="col" style={{ backgroundColor: '#ef553b' }}>
                  Slno
                </th>
                <th scope="col" style={{ backgroundColor: '#ef553b' }}>
                  First
                </th>

                <th scope="col" style={{ backgroundColor: '#ef553b' }}>
                  Email
                </th>
                <th scope="col" style={{ backgroundColor: '#ef553b' }}>
                  Phone
                </th>
                <th scope="col" style={{ backgroundColor: '#ef553b' }}>
                  Delete
                </th>
                <th scope="col" style={{ backgroundColor: '#ef553b' }}>
                  View More
                </th>
              </tr>
            </thead>
            <tbody style={{ color: '#e6e6e6' }}>
              {details
                ? details.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          {data.fname} {data.lname}
                        </td>

                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                          <button className="btn btn-danger" >Delete</button>
                        </td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              navigate('/adminClientEdit');
                              dispatch(detailsEdit(data));
                             
                              
                            }}
                          >
                            More Details
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : 'No Data found'}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUserInfo;
