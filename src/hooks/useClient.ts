import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { User } from '../types';

export type UseClient = (options: {
	apiKey: string;
	userData: User;
	tokenOrProvider: string;
}) => StreamChat;

export const useClient = (
	apiKey: string,
	userData: User,
	tokenOrProvider: string,
) => {
	const [chatClient, setChatClient] = useState<StreamChat | null>(null);

	useEffect(() => {
		const client = new StreamChat(apiKey);
		// prevents application from setting stale client (user changed, for example)
		let didUserConnectInterrupt = false;

		const connectionPromise = client
			.connectUser(
				{
					id: userData.tag,
				},
				tokenOrProvider,
			)
			.then(() => {
				if (!didUserConnectInterrupt) setChatClient(client);
			});

		return () => {
			didUserConnectInterrupt = true;
			setChatClient(null);
			// wait for connection to finish before initiating closing sequence
			connectionPromise
				.then(() => client.disconnectUser())
				.then(() => {
					console.log('connection closed');
				});
		};
	}, [apiKey, userData.tag, tokenOrProvider]);

	return chatClient;
};
