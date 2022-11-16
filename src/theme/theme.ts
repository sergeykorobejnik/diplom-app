import { extendTheme } from '@chakra-ui/react';
import { Button } from './components';

const theme = extendTheme({
	styles: {
		global: {
			'.body': 'red',
		},
	},
	components: {
		Button,
	},
});
export { theme };
