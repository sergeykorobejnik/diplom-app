import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	ResponseAuthPayload,
	SignUpPayload,
	SignInPayload,
	User,
} from '../../types';
import { History } from '../../constants/history';

type InitialState = {
	user: User;
	loading: boolean;
};

const initialState: InitialState = {
	user: {
		name: '',
		id: '',
		tag: '',
		email: '',
		avatar: null,
		token: '',
		streamToken: '',
	},
	loading: false,
};

const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reqSingUp(state, action: PayloadAction<SignUpPayload>) {
			state.loading = true;
		},
		reqSingUpSuccess(state, action: PayloadAction<ResponseAuthPayload>) {
			state.loading = false;
			state.user = { ...state.user, ...action.payload };
		},
		reqSingUpError(state) {
			state.loading = false;
		},
		reqSignIn(state, action: PayloadAction<SignInPayload>) {
			state.loading = true;
		},
		reqSingInSuccess(state, action: PayloadAction<ResponseAuthPayload>) {
			state.loading = false;
			state.user = { ...state.user, ...action.payload };
		},
		reqSingInError(state) {
			state.loading = false;
		},
		clearAuth(state) {
			state.loading = false;
			state.user = { ...initialState.user };
			History.push('/auth/sign-in');
		},
	},
});

export const {
	reqSingUp,
	reqSingUpSuccess,
	reqSingUpError,
	reqSignIn,
	reqSingInSuccess,
	reqSingInError,
	clearAuth,
} = authReducer.actions;

export default authReducer.reducer;
