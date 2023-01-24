import { combineReducers } from '@reduxjs/toolkit';

import adminReducer from './adminReducer';
import clientReducers from './clientReducers';
import trainerReducers from './trainerReducer';
export default combineReducers({
  admin: adminReducer,
  client: clientReducers,
  trainer: trainerReducers,
});
