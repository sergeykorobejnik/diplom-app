import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const BasicLayout: React.FC = () => {
	return (
		<Box minW="100vw" minH="100vh" backgroundColor="gray.800">
			<Outlet />
		</Box>
	);
};

export default BasicLayout;
