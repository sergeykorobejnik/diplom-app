import React from 'react';
import { useNavigate } from 'react-router-dom';
import { History } from '../../constants/history';

const NavigateSetter: React.FC = () => {
	History.navigate = useNavigate();
	return null;
};

export default NavigateSetter;
