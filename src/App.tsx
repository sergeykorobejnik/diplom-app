import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Routes, Route } from 'react-router-dom';
import AuthOutlet from './components/AuthOutlet';
import SignInContainer from './pages/SignIn/SignIn.container';
import SignUpContainer from './pages/SignUp/SignUp.container';
import { Center, Text } from '@chakra-ui/react';
import Protected from './hoc/Protected';
import MessengerContainer from './pages/Messanger/Messenger.container';

function App() {
	return (
		<Routes>
			<Route path="/auth" element={<AuthOutlet />}>
				<Route path="sign-in" element={<SignInContainer />} />
				<Route path="sign-up" element={<SignUpContainer />} />
			</Route>
			<Route
				path="/"
				element={
					<Protected>
						<MessengerContainer />
					</Protected>
				}
			/>
			<Route path="*" element={<Center>NOT FOUND</Center>} />
		</Routes>
	);
}

export default App;
