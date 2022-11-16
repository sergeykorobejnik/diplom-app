import React from 'react';
import { Center, Container, Flex, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const AuthOutlet: React.FC = () => {
	return (
		<Center h="100vh" w="100vw" backgroundColor="gray.800">
			<Outlet />
		</Center>
	);
};

export default AuthOutlet;
