import { createSlice } from '@reduxjs/toolkit'
const INITIAL_STATE = {
  details: [],

}

const singupSlice = createSlice({

  name: "singup",
  initialState: INITIAL_STATE,
  reducers: {
    doSingUp: async (state, action) => {

    }
  }
})


export const { doSingUp } = singupSlice.actions;
//reducer export to a store 
export default singupSlice.reducer;