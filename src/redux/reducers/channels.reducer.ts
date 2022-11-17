import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

type InitialState = {
	usersByTag: {
		loading: boolean;
		users: Array<User['tag']>;
	};
};

const initialState: InitialState = {
	usersByTag: {
		loading: false,
		users: [],
	},
};

const channelsReducer = createSlice({
	name: 'channels',
	initialState,
	reducers: {
		setUsersByTag(state, action: PayloadAction<User['tag']>) {
			state.usersByTag.loading = true;
		},
		setUsersByTagSuccess(state, action: PayloadAction<Array<User['tag']>>) {
			state.usersByTag.loading = false;
			state.usersByTag.users = action.payload;
		},
	},
});

export const { setUsersByTag, setUsersByTagSuccess } = channelsReducer.actions;

export default channelsReducer.reducer;
