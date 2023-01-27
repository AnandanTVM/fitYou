import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  selectedTrainerdetails: '',
  planDetails: '',
  TrainerDetails: '',
};
const Client = createSlice({
  name: 'client',
  initialState: INITIAL_STATE,
  reducers: {
    getSelectedTrainerDetails: (state, action) => {
      let { selectedTrainerdetails } = state;

      selectedTrainerdetails = action.payload;

      return { ...state, selectedTrainerdetails };
    },
    getPlanDetails: (state, action) => {
      let { planDetails } = state;

      planDetails = action.payload;

      return { ...state, planDetails };
    },
    getChatTrainerDetails: (state, action) => {
      let { TrainerDetails } = state;
      TrainerDetails = action.payload;
      return { ...state, TrainerDetails };
    },
  },
});

export const { getChatTrainerDetails, getSelectedTrainerDetails, getPlanDetails } =
  Client.actions;
export default Client.reducer;
