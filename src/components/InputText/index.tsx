import React, { useState } from 'react';
import {
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	FormErrorMessage,
	InputProps,
	FormControlProps,
	InputRightElement,
	FormLabelProps,
} from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';

interface IInputProps extends InputProps {
	label?: string;
	errorMsg?: string;
	formControlProps?: FormControlProps;
	formLabelProps?: FormLabelProps;
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	isPassword?: boolean;
	width?: string;
	type?:
		| 'none'
		| 'text'
		| 'tel'
		| 'url'
		| 'email'
		| 'number'
		| 'decimal'
		| 'search'
		| 'password'
		| 'time'
		| undefined;
	onClickRightIcon?: () => void;
}

export const InputText = React.forwardRef<null, IInputProps>(
	(
		{
			errorMsg,
			label,
			leftIcon,
			rightIcon,
			formControlProps,
			isPassword,
			width = '100%',
			type = 'text',
			formLabelProps,
			onClickRightIcon,
			...rest
		},
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);
		return (
			<FormControl isInvalid={!!errorMsg} {...formControlProps}>
				{label && (
					<FormLabel
						mb={2}
						color={'white'}
						fontSize="16px"
						fontWeight={400}
						{...formLabelProps}>
						{label}
					</FormLabel>
				)}
				<InputGroup>
					{leftIcon ? (
						<InputLeftElement h="100%">{leftIcon}</InputLeftElement>
					) : null}
					<Input
						type={
							isPassword
								? showPassword
									? 'text'
									: 'password'
								: type
						}
						height="48px"
						fontSize={'16px'}
						fontWeight={500}
						color={'white'}
						_placeholder={{ color: 'neutral.4' }}
						border={'2px solid'}
						backgroundColor="blue.700"
						borderColor="blue.500"
						borderRadius="12px"
						_invalid={{
							border: '2px solid #E53E3E',
							boxShadow: 'none',
						}}
						_hover={{
							border: '2px solid',
							borderColor: 'blue.800',
							boxShadow: 'none',
						}}
						_focus={{
							border: '2px solid',
							borderColor: 'teal.500',
							boxShadow: 'none',
						}}
						{...rest}
						ref={ref}
					/>
					{rightIcon ? (
						<InputRightElement
							onClick={onClickRightIcon}
							cursor={'pointer'}
							h={'100%'}>
							{rightIcon}
						</InputRightElement>
					) : null}
					{isPassword ? (
						<InputRightElement
							cursor={'pointer'}
							height={'100%'}
							onClick={() => setShowPassword(!showPassword)}>
							<AiFillEye color="white" />
						</InputRightElement>
					) : null}
				</InputGroup>
				<FormErrorMessage mt={0}>{errorMsg}</FormErrorMessage>
			</FormControl>
		);
	},
);
InputText.displayName = 'InputText';
