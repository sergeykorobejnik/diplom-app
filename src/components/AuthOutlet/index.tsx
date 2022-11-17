import React from 'react';
import { Center, Container, Flex, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { BiMessageSquareCheck } from 'react-icons/bi';

const AuthOutlet: React.FC = () => {
	return (
		<Center h="100vh" w="100vw" backgroundColor="gray.800">
			<Flex>
				<Box alignSelf="center" mb={10}>
					<BiMessageSquareCheck size="200px" color="white" />
				</Box>
				<Outlet />
			</Flex>
		</Center>
	);
};

export default AuthOutlet;
