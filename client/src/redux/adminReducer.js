import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  adminDetails: '',
  clientDetails: '',
  trainerDetails: '',
};

const singupSlice = createSlice({
  name: 'admindetails',
  initialState: INITIAL_STATE,
  reducers: {
    loginInfo: (state, action) => {
      let { adminDetails } = state;

      adminDetails = action.payload;

      return { ...state, adminDetails };
    },
    ClientLoginInfo: (state, action) => {
      let { clientDetails } = state;

      clientDetails = action.payload;

      return { ...state, clientDetails };
    },
    trainerLoginInfo: (state, action) => {
      let { trainerDetails } = state;

      trainerDetails = action.payload;

      return { ...state, trainerDetails };
    },
    clearClientLoginDetails: (state, action) => {
      let { clientDetails } = state;

      clientDetails = false;

      return { ...state, clientDetails };
    },
    clearAdminLoginDetails: (state, action) => {
      let { adminDetails } = state;

      adminDetails = false;

      return { ...state, adminDetails };
    },
    clearTrainerLoginDetails: (state, action) => {
      let { trainerDetails } = state;

      trainerDetails = false;

      return { ...state, trainerDetails };
    },
  },
});

export const {
  loginInfo,
  trainerLoginInfo,
  ClientLoginInfo,
  clearClientLoginDetails,
  clearAdminLoginDetails,
  clearTrainerLoginDetails,
} = singupSlice.actions;
//reducer export to a store
export default singupSlice.reducer;
