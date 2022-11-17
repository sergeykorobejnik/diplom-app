import authReducer from './auth.reducer';
import channelsReducer from './channels.reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	auth: authReducer,
	channels: channelsReducer,
});
