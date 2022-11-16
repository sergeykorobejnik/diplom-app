import React from 'react';
import SignIn from './SingIn';
import { useForm } from 'react-hook-form';
import { SignInPayload } from '../../types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reqSignIn, reqSingUp } from '../../redux/reducers/auth.reducer';

const SignInContainer: React.FC = () => {
	const formControlProps = useForm<SignInPayload>();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (fields: SignInPayload) => {
		console.log(fields);
		dispatch(reqSignIn(fields));
	};

	return <SignIn formControlProps={formControlProps} onSubmit={onSubmit} />;
};

export default SignInContainer;
