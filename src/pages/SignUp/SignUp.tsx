import React from 'react';
import { InputText } from '../../components';
import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	FormControlProps,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { SignUpPayload } from '../../types';
import { UseFormReturn } from 'react-hook-form';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { MdAlternateEmail, MdEmail, MdPassword } from 'react-icons/md';

interface SignUpProps {
	formControlProps: UseFormReturn<SignUpPayload>;
	onSubmit: (fields: SignUpPayload) => void;
}
const SignUp: React.FC<SignUpProps> = ({
	formControlProps: { register, handleSubmit },
	onSubmit,
}) => {
	return (
		<Flex
			boxShadow="0px 20px 48px 8px rgba(0,0,0,0.1)"
			direction="column"
			backgroundColor="blue.600"
			borderRadius={20}
			p="50px 100px">
			<Box alignSelf="center" mb={10}>
				<BiMessageSquareCheck size={50} color="white" />
			</Box>
			<form
				onSubmit={handleSubmit(onSubmit, errors =>
					console.log(errors),
				)}>
				<SimpleGrid columns={2} spacing={5} mb={10}>
					<InputText
						{...register('tag')}
						label="tag"
						leftIcon={<MdAlternateEmail />}
					/>
					<InputText
						{...register('email')}
						label="email"
						leftIcon={<MdEmail />}
					/>
					<InputText
						{...register('password')}
						label="password"
						leftIcon={<MdPassword />}
					/>
					<InputText
						{...register('repeatPassword')}
						leftIcon={<MdPassword />}
						label="confirm Password"
					/>
				</SimpleGrid>
				<Button colorScheme="teal" w="100%" type="submit">
					Sing Up
				</Button>
			</form>
		</Flex>
	);
};

export default SignUp;
