import React from 'react';
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Link,
	SimpleGrid,
} from '@chakra-ui/react';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { InputText } from '../../components';
import { MdAlternateEmail, MdEmail, MdPassword } from 'react-icons/md';
import { UseFormReturn } from 'react-hook-form';
import { SignInPayload } from '../../types';
import { Link as RouterLink } from 'react-router-dom';

interface SingInProps {
	formControlProps: UseFormReturn<SignInPayload>;
	loading: boolean;
	onSubmit: (fields: SignInPayload) => void;
}

const SingIn: React.FC<SingInProps> = ({
	formControlProps: { register, handleSubmit },
	onSubmit,
	loading,
}) => {
	return (
		<Flex
			boxShadow="0px 20px 48px 8px rgba(0,0,0,0.1)"
			direction="column"
			backgroundColor="blue.600"
			maxW="xl"
			ml="48px"
			borderRadius={20}
			p="50px 100px">
			<Heading color="white" alignSelf="center" mb="48px">
				Sign in
			</Heading>
			<form
				onSubmit={handleSubmit(onSubmit, errors =>
					console.log(errors),
				)}>
				<SimpleGrid columns={2} spacing={5} mb={10}>
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
				</SimpleGrid>
				<Button
					colorScheme="teal"
					w="100%"
					type="submit"
					isLoading={loading}>
					Sing In
				</Button>
			</form>
			<Link
				as={RouterLink}
				alignSelf="center"
				to="/auth/sign-up"
				color="white"
				mt={2}
				_hover={{ color: 'teal.200' }}>
				Not registered account?
			</Link>
		</Flex>
	);
};

export default SingIn;
