import React, { useEffect, useState } from 'react';
import { ClientCurrentPlan, ClientNav, Plans } from '../Components';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { getClientPlan } from '../axios/serives/UserServices';
import { getPlanDetails } from '../redux/clientReducers';
function ClientPlanView() {
 
  const { clientDetails } = useSelector((state) => state.admin);
  const userId=clientDetails.userId;
  const [ativePlan,setActivePlan]=useState(false)
  const dispatch= useDispatch()
  console.log(clientDetails);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
       console.log("test");
      }
    } else {
      navigate('/login');
    }
     console.log("here in feach");
  getalldetails(userId )
  async function getalldetails(id) {
    const token = localStorage.getItem('token');
    const clientPlan=await getClientPlan(token,id);
   
    if(clientPlan.status){
      setActivePlan(clientPlan.package[0])
    }
    console.log(clientPlan.package[0]);
  }
  }, [dispatch, navigate, userId]);

  if (ativePlan) {
      dispatch(getPlanDetails(ativePlan))
  } else {
    dispatch(getPlanDetails(false))
  }
  
  return (
    <div>
      <ClientNav />
      <div> {ativePlan?<ClientCurrentPlan/>: <Plans />}</div>
    
    </div>
  );
}

export default ClientPlanView;
