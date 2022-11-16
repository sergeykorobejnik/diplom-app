import { all } from 'redux-saga/effects';
import watchSignUp from './auth/sign-up.saga';
import watchSignIn from './auth/sign-in.saga';

export default function* rootSaga() {
	yield all([watchSignUp(), watchSignIn()]);
}
