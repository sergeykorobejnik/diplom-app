import { ComponentStyleConfig } from '@chakra-ui/react';

export const Text: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '24px',
	},
	variants: {
		bodyMedium: {
			fontSize: '14px',
			lineHeight: '20px',
		},
		bodySmall: {
			fontSize: '12px',
			lineHeight: '16px',
		},
	},
};
