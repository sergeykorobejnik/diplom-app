import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Protected: React.FC<PropsWithChildren> = ({ children }) => {
	const token = useSelector((state: RootStore) => state.auth.user.token);
	if (!token) {
		return <Navigate to="/auth/sign-in" />;
	} else return <>{children}</>;
};

export default Protected;
