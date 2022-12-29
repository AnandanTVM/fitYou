import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  selectedTrainerdetails: '',
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
  },
});

export const { getSelectedTrainerDetails } = Client.actions;
export default Client.reducer;
