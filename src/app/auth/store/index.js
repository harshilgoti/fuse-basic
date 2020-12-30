import { combineReducers } from '@reduxjs/toolkit';
import auth from './loginSlice';
import user from './userSlice';

const authReducers = combineReducers({
	user,
	auth,
});

export default authReducers;
