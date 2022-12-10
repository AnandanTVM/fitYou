import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  allUsersDetails: '',
  userDetails: [],
  trainerdetails: [],
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
    trainerDetailsEdit: (state, action) => {
      // state.trainerdetails = [];
      // state.trainerdetails.push(action.payload);
      // console.log(state.trainerdetails);
      let { trainerdetails } = state;
      console.log(trainerdetails);
      trainerdetails = action.payload;
      console.log(trainerdetails);
      return { ...state, trainerdetails };
    },
  },
});

export const { detailsEdit, detailsStore, trainerDetailsEdit } =
  singupSlice.actions;
//reducer export to a store
export default singupSlice.reducer;
