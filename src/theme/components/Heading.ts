import { ComponentStyleConfig } from '@chakra-ui/react';

export const Heading: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: '500',
	},
	variants: {
		h1: {
			fontSize: '48px',
			lineHeight: '56px',
		},
		h2: {
			fontSize: '40px',
			lineHeight: '48px',
		},
		h3: {
			fontSize: '32px',
			lineHeight: '40px',
		},
		h4: {
			fontSize: '24px',
			lineHeight: '32px',
		},
	},
};
