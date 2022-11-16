import React from 'react';
import SignUp from './SignUp';
import { useForm } from 'react-hook-form';
import { SignUpPayload } from '../../types';
import { useDispatch } from 'react-redux';
import { reqSingUp } from '../../redux/reducers/auth.reducer';
import { useNavigate } from 'react-router-dom';

const SignUpContainer: React.FC = () => {
	const formControlProps = useForm<SignUpPayload>();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (fields: SignUpPayload) => {
		console.log(fields);
		dispatch(reqSingUp(fields));
	};
	return <SignUp formControlProps={formControlProps} onSubmit={onSubmit} />;
};

export default SignUpContainer;
