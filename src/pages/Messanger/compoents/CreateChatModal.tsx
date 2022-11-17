import React, { useEffect } from 'react';
import {
	Button,
	Center,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	PopoverContent,
	Spinner,
	Stack,
	useDisclosure,
	UseDisclosureReturn,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootStore } from '../../../redux';
import { setUsersByTag } from '../../../redux/reducers/channels.reducer';
import apiBase from '../../../api/api.base';
import { InputText } from '../../../components';
import { Controller } from 'react-hook-form';

type CreateChatModalProps = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	userTag: string;
};

const CreateChatModal: React.FC<CreateChatModalProps> = ({
	isOpen,
	onClose,
	userTag,
}) => {
	const dipatch = useDispatch();

	const {
		register,
		watch,
		control,
		formState: { errors },
		getValues,
	} = useForm({
		defaultValues: {
			userByTag: '',
			selectedUser: '',
			channelName: '',
		},
	});

	const { loading, users }: { loading: boolean; users: Array<string> } =
		useSelector((state: RootStore) => state.channels.usersByTag);

	useEffect(() => {
		const { unsubscribe } = watch(({ userByTag, channelName }) => {
			if (userByTag && !channelName) {
				dipatch(setUsersByTag(userByTag));
			}
		});
		return () => unsubscribe();
	}, [watch, users]);

	const selectedUser = watch('selectedUser');

	const handleChannelCreation = async () => {
		const values = getValues();
		await apiBase.post('/api/v1/channels/create', {
			userTag,
			recipientTag: values.selectedUser,
			channelName: values.channelName,
		});
		onClose();
	};

	return (
		<Modal isOpen={true} onClose={onClose} size="md">
			<ModalContent backgroundColor="blue.600">
				<ModalCloseButton />
				<ModalHeader color="white">Add new channel</ModalHeader>
				<ModalBody>
					<Flex direction="column">
						<InputText
							{...register('userByTag')}
							color="white"
							mb="15px"
							w="100%"
							variant="filled"
							colorScheme="teal"
							placeholder="look for someone?"
						/>
						{loading ? (
							<Center>
								<Spinner size="md" />
							</Center>
						) : (
							<Flex gap="5px" flexWrap="wrap" mb="15px">
								{users.map(user => (
									<Controller
										key={user}
										control={control}
										render={({
											field: { value, onChange },
										}) => {
											return (
												<Button
													h="20px"
													py="5px"
													fontWeight={500}
													backgroundColor={
														user === value
															? 'teal.400'
															: 'blue.400'
													}
													onClick={() =>
														onChange(user)
													}>
													@ {user}
												</Button>
											);
										}}
										name="selectedUser"
									/>
								))}
							</Flex>
						)}
						{selectedUser && (
							<>
								<InputText
									{...register('channelName', {
										required: true,
										maxLength: 10,
									})}
									color="white"
									mb="15px"
									w="100%"
									variant="filled"
									colorScheme="teal"
									placeholder="add name for your conversation?"
									errorMsg={errors?.channelName?.message}
								/>
								<Button
									isDisabled={!!errors?.channelName?.message}
									backgroundColor="teal.400"
									onClick={() => handleChannelCreation()}>
									Create channel
								</Button>
							</>
						)}
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CreateChatModal;
