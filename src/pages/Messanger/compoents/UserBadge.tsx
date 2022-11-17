import React from 'react';
import {
	Box,
	Flex,
	IconButton,
	styled,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { BiLogOut, HiOutlinePencilAlt, RiLogoutBoxLine } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import CreateChatModal from './CreateChatModal';
import { clearAuth } from '../../../redux/reducers/auth.reducer';

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
	const dispatch = useDispatch();
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
					<Flex gap="10px">
						<IconButton
							backgroundColor={'red.500'}
							boxSize={10}
							onClick={() => dispatch(clearAuth())}
							aria-label={'add-channel'}
							icon={<RiLogoutBoxLine />}
						/>
						<IconButton
							boxSize={10}
							onClick={onOpen}
							aria-label={'add-channel'}
							icon={<HiOutlinePencilAlt />}
						/>
					</Flex>
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
