import React from 'react';
import {
	Box,
	Center,
	createStandaloneToast,
	HStack,
	Text,
} from '@chakra-ui/react';
import { theme } from '../theme/theme';
import { PayloadError } from '../types';

export const { toast, ToastContainer } = createStandaloneToast({ theme });

interface IToastMessageProps {
	onClose: () => void;
	variant: 'success' | 'error' | 'warning' | 'info';
	message: string;
}

const ToastMessage: React.FC<IToastMessageProps> = ({
	onClose,
	variant,
	message,
}) => {
	function getBorderColor() {
		switch (variant) {
			case 'error':
				return theme.colors.red['500'];
			case 'warning':
				return '#fca503';
			case 'info':
				return '#0384fc';
			case 'success':
				return 'green.500';
			default:
				return 'transparent';
		}
	}

	return (
		<Box
			onClick={onClose}
			borderRadius="5px"
			bg="white"
			padding="8px 12px"
			backgroundColor={getBorderColor()}
			border={`1px solid ${getBorderColor()}`}
			boxShadow="0px 6px 24px rgba(59, 41, 2, 0.08);">
			<HStack>
				<Box w={{ base: '100%', md: '300px' }}>
					<Text color="white" variant="bodyMedium" fontWeight="400">
						{message}
					</Text>
				</Box>
				<Center borderRadius="50%" flexShrink={0}>
					{variant === 'success' ? <></> : null}
				</Center>
			</HStack>
		</Box>
	);
};

class AlerterService {
	success(message: string) {
		let toastIdRef: any = null;

		toastIdRef = toast({
			status: 'success',
			duration: 3000,
			isClosable: true,
			position: 'top',
			render: () => (
				<ToastMessage
					onClose={() => {
						if (toastIdRef) {
							toast.close(toastIdRef);
						}
					}}
					variant="success"
					message={message}
				/>
			),
		});
	}

	error(message: { errors: PayloadError[] } | string) {
		let toastIdRef: any = null;
		if (typeof message === 'string') {
			toastIdRef = toast({
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top',
				render: () => (
					<ToastMessage
						onClose={() => {
							if (toastIdRef) {
								toast.close(toastIdRef);
							}
						}}
						variant="error"
						message={message}
					/>
				),
			});
		} else {
			toastIdRef = toast({
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top-right',
				render: () => (
					<ToastMessage
						onClose={() => {
							if (toastIdRef) {
								toast.close(toastIdRef);
							}
						}}
						variant="error"
						message={message.errors[0].errorMessage}
					/>
				),
			});
		}
	}

	warning(message: string) {
		let toastIdRef: any = null;

		toastIdRef = toast({
			status: 'warning',
			duration: 3000,
			isClosable: true,
			position: 'top',
			render: () => (
				<ToastMessage
					onClose={() => {
						if (toastIdRef) {
							toast.close(toastIdRef);
						}
					}}
					variant="warning"
					message={message}
				/>
			),
		});
	}

	info(message: string) {
		let toastIdRef: any = null;

		toastIdRef = toast({
			status: 'info',
			duration: 3000,
			isClosable: true,
			position: 'top',
			render: () => (
				<ToastMessage
					onClose={() => {
						if (toastIdRef) {
							toast.close(toastIdRef);
						}
					}}
					variant="info"
					message={message}
				/>
			),
		});
	}
}

export const Alerter = new AlerterService();
