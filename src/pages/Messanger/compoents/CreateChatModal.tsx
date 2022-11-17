import React, { useEffect, useState } from 'react';
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
import {
	clearUsersByTag,
	setUsersByTag,
} from '../../../redux/reducers/channels.reducer';
import apiBase from '../../../api/api.base';
import { InputText } from '../../../components';
import { Controller } from 'react-hook-form';
import { Alerter } from '../../../utils';

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
	const dispatch = useDispatch();

	const {
		register,
		watch,
		control,
		formState: { errors },
		getValues,
		reset,
	} = useForm({
		defaultValues: {
			userByTag: '',
			selectedUser: '',
		},
	});

	const [submitting, setSubmitting] = useState(false);

	const { loading, users }: { loading: boolean; users: Array<string> } =
		useSelector((state: RootStore) => state.channels.usersByTag);

	useEffect(() => {
		const { unsubscribe } = watch(({ userByTag, selectedUser }) => {
			if (userByTag && !selectedUser) {
				dispatch(setUsersByTag(userByTag));
			}
		});
		return () => unsubscribe();
	}, [watch, users]);

	useEffect(
		() => () => {
			dispatch(clearUsersByTag());
			reset();
		},
		[],
	);

	const selectedUser = watch('selectedUser');

	const handleChannelCreation = async () => {
		setSubmitting(true);
		const values = getValues();
		await apiBase
			.post('/api/v1/channels/create', {
				userTag,
				recipientTag: values.selectedUser,
			})
			.then(res => {
				if (!res.success) {
					Alerter.error(res.errors?.[0]);
				} else {
					Alerter.success('Channel was created');
				}
				setSubmitting(false);
			})
			.catch(e => {
				console.log(e);
				Alerter.error('Error during channel creation');
				setSubmitting(false);
			});
		onClose();
		setSubmitting(false);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="md">
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
								<Button
									isLoading={submitting}
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
