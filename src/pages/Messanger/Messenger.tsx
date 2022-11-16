import React from 'react';
import { Box } from '@chakra-ui/react';
import { WebSocket } from 'vite';
import WebSocketWrapper from '../../components/WebSocketWrapper';

interface MessangerProps {}

const Messenger: React.FC = () => {
	return (
		<Box minH="100vh" minW="100vw" backgroundColor="gray.800">
			<WebSocketWrapper />
			<div>test</div>
		</Box>
	);
};

export default Messenger;
