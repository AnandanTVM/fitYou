import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { trainerDetailsEdit } from '../../redux/adminReducer';
// import jwt from 'jwt-decode';
import { getTrainerApprovel } from '../../action/AdminAction';

function AdminTrainerApprovel() {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [details, SetDetails] = useState();
  
    useEffect(() => {
      const token = localStorage.getItem('Admintoken');
      fetchData();
  
      async function fetchData() {
        const data = await getTrainerApprovel(token);
        SetDetails(data.clientDetails);
        
      }
    }, [dispatch]);
    return (
    <div>
       <div className="container">
      <div className="row mt-4">
        <h1> Waiting For Approval</h1>
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
                  Status
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
                        {data.status}
                        </td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => {
                               navigate('/trainerdetailsview');
                              dispatch(trainerDetailsEdit(data));
                             
                              
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
    </div>
  )
}

export default AdminTrainerApprovel