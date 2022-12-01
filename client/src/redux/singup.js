import {createSlice} from '@reduxjs/toolkit'
// import axios from "axios";
import { axiosHomeInstance } from '../axios/axios'; 

const INITIAL_STATE = {
    details:[],
    
}

const singupSlice=createSlice({

    name:"singup",
    initialState:INITIAL_STATE, 
    reducers:{
        doSingUp:async(state,action)=>{
            state.details=[];
            // state.details.push(action.payload)
            console.log(state.details[0]);
            // console.log(action.payload);
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
               const  { data } = await axiosHomeInstance.post(
                "/clientRegister",
                action.payload,
                config
              );
              if(data.status){
                state.details.push(true)
                console.log(data);
              }else{
                state.details.push(false)
              }



        }
    }
})


export const { doSingUp } = singupSlice.actions;
//reducer export to a store 
export default singupSlice.reducer;