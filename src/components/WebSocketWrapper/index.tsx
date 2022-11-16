import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux';

// interface WebSocketWrapperProps {}
const client = new WebSocket('ws://localhost:5000');

client.onopen = () => {
	console.log('Established');
	client.send(JSON.stringify({ id: 'hi' }));
};

const WebSocketWrapper: React.FC = () => {
	const token = useSelector((state: RootStore) => state.auth.user.token);
	return <Flex></Flex>;
};

export default WebSocketWrapper;
