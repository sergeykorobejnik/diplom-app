import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseAuthPayload, SignUpPayload, SignInPayload } from '../../types';

type InitialState = {
	user: {
		tag: string;
		email: string;
		avatar: null | string;
		token: string;
	};
	loading: boolean;
};

const initialState: InitialState = {
	user: {
		tag: '',
		email: '',
		avatar: null,
		token: '',
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
	},
});

export const {
	reqSingUp,
	reqSingUpSuccess,
	reqSingUpError,
	reqSignIn,
	reqSingInSuccess,
	reqSingInError,
} = authReducer.actions;

export default authReducer.reducer;
