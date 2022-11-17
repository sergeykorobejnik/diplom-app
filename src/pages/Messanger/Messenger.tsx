import React, { useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { StreamChat } from 'stream-chat';
import {
	Chat,
	Channel,
	ChannelHeader,
	MessageInput,
	MessageList,
	Thread,
	Window,
	ChannelList,
	LoadingIndicator,
} from 'stream-chat-react';
import { useSelector } from 'react-redux';
import { RootStore, store } from '../../redux';
import { User } from '../../types';
import { useClient } from '../../hooks/useClient';

import './styles/messenger.styles.scss';
import UserBadge from './compoents/UserBadge';

// const client = StreamChat.getInstance(import.meta.env.VITE_STREAM_API_KEY);

interface MessangerProps {
	user: User;
}

const Messenger: React.FC<MessangerProps> = ({ user }) => {
	const client = useClient(
		import.meta.env.VITE_STREAM_API_KEY,
		user,
		user.streamToken,
	);

	if (!client) {
		return <LoadingIndicator />;
	}

	return (
		<Flex minH="100vh" minW="100vw" backgroundColor="gray.900">
			<Chat client={client} theme="str-chat__theme-dark">
				<Flex w="30%" h="100vh" pos="relative" direction="column">
					<UserBadge userTag={user.tag} />
					<Box flexGrow={1}>
						<ChannelList />
					</Box>
				</Flex>
				<Box flexGrow={1}>
					<Channel>
						<Window>
							<ChannelHeader />
							<MessageList />
							<MessageInput />
						</Window>
						<Thread />
					</Channel>
				</Box>
			</Chat>
		</Flex>
	);
};

export default React.memo(Messenger);
