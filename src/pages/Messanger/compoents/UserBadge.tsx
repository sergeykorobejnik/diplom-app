import React, { useEffect, useState } from 'react';
import {
	Box,
	Button,
	Center,
	Fade,
	Flex,
	IconButton,
	Input,
	Link,
	LinkBox,
	Popover,
	PopoverContent,
	Spinner,
	Stack,
	styled,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { HiOutlinePencilAlt } from 'react-icons/all';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersByTag } from '../../../redux/reducers/channels.reducer';
import { RootStore } from '../../../redux';
import apiBase from '../../../api/api.base';
import CreateChatModal from './CreateChatModal';

interface UserBadgeProps {
	userTag: string;
}

const FlexWrapper = styled(Flex, {
	label: 'FlexWrapper',
	baseStyle: {
		backgroundColor: 'blue.700',
		borderRadius: 10,
		position: 'relative',
		p: '10px 20px',
	},
});

const UserBadge: React.FC<UserBadgeProps> = ({ userTag }) => {
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
	return (
		<Box w="100%" p={5}>
			<Box>
				<FlexWrapper
					align="center"
					justify="space-between"
					backgroundColor="blue.700">
					<Text fontWeight="500" fontSize="16px" color="white">
						<Text as="span" color="gray.300">
							@
						</Text>{' '}
						{userTag}
					</Text>
					<IconButton
						boxSize={10}
						onClick={onOpen}
						aria-label={'add-channel'}
						icon={<HiOutlinePencilAlt />}
					/>
				</FlexWrapper>
			</Box>
			<CreateChatModal
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
				userTag={userTag}
			/>
		</Box>
	);
};

export default UserBadge;
