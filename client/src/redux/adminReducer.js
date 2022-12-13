import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  adminDetails: '',
  // allUsersDetails: '',
  // userDetails: [],
  // trainerdetails: '',
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

      trainerdetails = action.payload;

      return { ...state, trainerdetails };
    },
    trainerDetailReject: (state, action) => {
      let { trainerdetails } = state;

      trainerdetails.status = action.payload;

      return { ...state, trainerdetails };
    },
    loginInfo: (state, action) => {
      let { adminDetails } = state;

      adminDetails = action.payload;

      return { ...state, adminDetails };
    },
  },
});

export const {
  detailsEdit,
  detailsStore,
  trainerDetailsEdit,
  trainerDetailReject,
  loginInfo,
} = singupSlice.actions;
//reducer export to a store
export default singupSlice.reducer;
