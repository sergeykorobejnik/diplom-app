import React from 'react';
import { Box, Button, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import { BiMessageSquareCheck } from 'react-icons/bi';
import { InputText } from '../../components';
import { MdAlternateEmail, MdEmail, MdPassword } from 'react-icons/md';
import { UseFormReturn } from 'react-hook-form';
import { SignInPayload } from '../../types';

interface SingInProps {
	formControlProps: UseFormReturn<SignInPayload>;
	onSubmit: (fields: SignInPayload) => void;
}

const SingIn: React.FC<SingInProps> = ({
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
						{...register('email')}
						label="email"
						leftIcon={<MdEmail />}
					/>
					<InputText
						{...register('password')}
						label="password"
						leftIcon={<MdPassword />}
					/>
				</SimpleGrid>
				<Button colorScheme="teal" w="100%" type="submit">
					Sing Up
				</Button>
			</form>
		</Flex>
	);
};

export default SingIn;
