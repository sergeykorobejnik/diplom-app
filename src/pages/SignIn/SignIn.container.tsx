import React from 'react';
import SignIn from './SingIn';
import { useForm } from 'react-hook-form';
import { SignInPayload } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reqSignIn, reqSingUp } from '../../redux/reducers/auth.reducer';
import { RootStore } from '../../redux';

const SignInContainer: React.FC = () => {
	const formControlProps = useForm<SignInPayload>();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loading = useSelector((state: RootStore) => state.auth.loading);

	const onSubmit = (fields: SignInPayload) => {
		console.log(fields);
		dispatch(reqSignIn(fields));
	};

	return (
		<SignIn
			formControlProps={formControlProps}
			onSubmit={onSubmit}
			loading={loading}
		/>
	);
};

export default SignInContainer;
