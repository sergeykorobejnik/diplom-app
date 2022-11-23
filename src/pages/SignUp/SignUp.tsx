import React from 'react';
import { InputText } from '../../components';
import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	FormControlProps,
	GridItem,
	Heading,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { SignUpPayload } from '../../types';
import { UseFormReturn } from 'react-hook-form';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { MdAlternateEmail, MdEmail, MdPassword } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

interface SignUpProps {
	formControlProps: UseFormReturn<SignUpPayload>;
	onSubmit: (fields: SignUpPayload) => void;
	loading: boolean;
}
const SignUp: React.FC<SignUpProps> = ({
	formControlProps: { register, handleSubmit },
	onSubmit,
	loading,
}) => {
	return (
		<Flex
			ml="48px"
			boxShadow="0px 20px 48px 8px rgba(255,255,255,0.05)"
			direction="column"
			backgroundColor="blue.600"
			maxW="xl"
			backdropFilter="opacity(80%)"
			borderRadius={20}
			p="50px 100px">
			<Heading color="white" alignSelf="center" mb="48px">
				Sign Up
			</Heading>
			<form
				onSubmit={handleSubmit(onSubmit, errors =>
					console.log(errors),
				)}>
				<SimpleGrid columns={2} spacing={5} mb={10}>
					<GridItem colSpan={2}>
						<InputText
							{...register('name')}
							label="name"
							leftIcon={<FaUserAlt color="white" />}
						/>
					</GridItem>
					<InputText
						{...register('tag')}
						label="tag"
						leftIcon={<MdAlternateEmail color="white" />}
					/>
					<InputText
						{...register('email')}
						label="email"
						leftIcon={<MdEmail color="white" />}
					/>
					<InputText
						{...register('password')}
						label="password"
						isPassword
						leftIcon={<MdPassword color="white" />}
					/>
					<InputText
						{...register('repeatPassword')}
						label="confirm password"
						isPassword
						leftIcon={<MdPassword color="white" />}
					/>
				</SimpleGrid>
				<Button
					colorScheme="teal"
					w="100%"
					type="submit"
					isLoading={loading}>
					Sing Up
				</Button>
			</form>
			<Link
				as={RouterLink}
				alignSelf="center"
				to="/auth/sign-in"
				color="white"
				mt={2}
				_hover={{ color: 'teal.200' }}>
				Already have account?
			</Link>
		</Flex>
	);
};

export default SignUp;
