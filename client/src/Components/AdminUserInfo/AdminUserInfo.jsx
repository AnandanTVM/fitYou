import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component'
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
  console.log(details);
const columns=[
{
  name:"Name",
  selector:(row)=>row.fname+"  "+row.lname,
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
  name:"Block/Unblock",
  selector:(row)=>{return(<div>  <button className="btn btn-danger" >Delete</button></div>)},
},
{
  name:"View More",
  selector:(row)=>{return(<div> <button
    className="btn btn-info"
    onClick={() => {
      navigate('/adminClientEdit');
      dispatch(detailsEdit(row));
     
      
    }}
  >
    More Details
  </button></div>)},
},

];
  return (
    <div className="container">
      <div className="row mt-4">
        <h1> User Informations</h1>
      </div>
      <DataTable columns={columns} data={details} fixedHeader fixedHeaderScrollHeight='400px' selectableRows selectableRowsHighlight highlightOnHover pagination/>
     
    </div>
  );
}

export default AdminUserInfo;
