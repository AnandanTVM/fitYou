import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  allUsersDetails: 'achu',
  userDetails: [],
};

const singupSlice = createSlice({
  name: 'admindetails',
  initialState: INITIAL_STATE,
  reducers: {
    detailsStore: (state, action) => {
      // console.log(action.payload);
      let { allUsersDetails } = state;
      console.log(allUsersDetails);
      allUsersDetails = action.payload;
      console.log(allUsersDetails);
      return { ...state, allUsersDetails };
    },
    detailsEdit: (state, action) => {
      state.userDetails = [];
      state.userDetails.push(action.payload);
      console.log(state.userDetails);
    },
  },
});

export const { detailsEdit, detailsStore } = singupSlice.actions;
//reducer export to a store
export default singupSlice.reducer;
