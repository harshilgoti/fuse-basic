import { combineReducers } from '@reduxjs/toolkit';
import dialog from './dialogSlice';
import message from './messageSlice';
import navbar from './navbarSlice';
import navigation from './navigationSlice';
import settings from './settingsSlice';
import areas from './areasSlice';

const fuseReducers = combineReducers({
	navigation,
	settings,
	navbar,
	message,
	dialog,
	areas
});

export default fuseReducers;
