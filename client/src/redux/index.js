import { combineReducers } from '@reduxjs/toolkit';

import adminReducer from './adminReducer';
import clientReducers from './clientReducers';
export default combineReducers({
  admin: adminReducer,
  client: clientReducers,
});
