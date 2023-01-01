import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  selectedTrainerdetails: '',
  planDetails:'',
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
  },
});

export const { getSelectedTrainerDetails ,getPlanDetails} = Client.actions;
export default Client.reducer;
