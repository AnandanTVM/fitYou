import { createSlice } from '@reduxjs/toolkit';
const INITIAL_STATE = {
  clientDetails: '',
};
const Trainer = createSlice({
  name: 'trainer',
  initialState: INITIAL_STATE,
  reducers: {
    getClientDetails: (state, action) => {
      let { clientDetails } = state;
      clientDetails = action.payload;
      return { ...state, clientDetails };
    },
  },
  
});

export const { getClientDetails } = Trainer.actions;
export default Trainer.reducer;
