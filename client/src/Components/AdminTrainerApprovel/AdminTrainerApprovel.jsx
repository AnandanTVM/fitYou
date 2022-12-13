import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { trainerDetailsEdit } from '../../redux/adminReducer';
// import jwt from 'jwt-decode';
import { getTrainerApprovel } from '../../axios/serives/AdminServices';
import DataTable from 'react-data-table-component';

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
    const columns=[
      {
        name:"Name",
        selector:(row)=>row.fname+ "  "+row.lname,
      },
      {
        name:"Email",
        selector:(row)=>row.email,
      },
      {
        name:"Phome",
        selector:(row)=>row.phone,
      },
      {
        name:"Status",
        selector:(row)=>{return(<div style={{color:'#E4CD05'}}>{row.status}</div>)},
      },
    
      {
        name:"View More",
        selector:(row)=>{return(<div>  <button
          className="btn btn-info"
          onClick={() => {
             navigate(`/trainerdetailsview/${row._id}`);
           
           
            
          }}
        >
          More Details
        </button></div>)},
      },
      
      ];
    return (
    <div>
       <div className="container">
      <div className="row mt-4">
        <h1> Waiting For Approval</h1>
      </div>
      <DataTable columns={columns} data={details} fixedHeader fixedHeaderScrollHeight='400px' selectableRows selectableRowsHighlight highlightOnHover pagination/>
     
    </div>
    </div>
  )
}

export default AdminTrainerApprovel