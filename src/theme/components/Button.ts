import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
	baseStyle: {
		fontFamily: 'DM Sans, sans-serif',
		fontWeight: '700',
		fontSize: '16px',
		lineHeight: '16px',
		borderRadius: '48px',
	},
	variants: {
		primary: {
			backgroundColor: 'blue.400',
			color: 'gray.100',
			height: '48px',
		},
		secondary: {
			color: '#23262F',
			border: '2px solid #E6E8EC',
			height: '48px',
		},
		tab: {
			height: '28px',
			fontSize: '14px',
			lineHeight: '16px',
			fontWeight: '700',
			bg: 'transparent',
			color: 'neutral.4',
		},
	},
	defaultProps: {
		variant: 'primary',
	},
};
