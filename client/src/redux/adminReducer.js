import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  allUsersDetails: [],
  userDetails: [],
};

const singupSlice = createSlice({
  name: 'singup',
  initialState: INITIAL_STATE,
  reducers: {
    detailsStore: async (state, action) => {
      console.log('here');
      console.log(action.payload);
      state.allUsersDetails.push(action.payload);
    },
    detailsEdit: async (state, action) => {
      state.userDetails = [];
      console.log('here');
      console.log(action.payload);
      state.userDetails.push(action.payload);
    },
  },
});

export const { detailsEdit, detailsStore } = singupSlice.actions;
//reducer export to a store
export default singupSlice.reducer;
