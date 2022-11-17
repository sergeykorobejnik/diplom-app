import React from 'react';
import Messenger from './Messenger';
import { User } from '../../types';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux';

const MessengerContainer: React.FC = () => {
	const user: User = useSelector((state: RootStore) => state.auth.user);
	const userByTag = useSelector(
		(state: RootStore) => state.channels.userByTag,
	);

	return user.streamToken ? <Messenger user={user} /> : null;
};

export default MessengerContainer;
