import { all } from 'redux-saga/effects';
import watchSignUp from './auth/sign-up.saga';
import watchSignIn from './auth/sign-in.saga';
import watchSearchUserByTag from './channels/channels.saga';

export default function* rootSaga() {
	yield all([watchSignUp(), watchSignIn(), watchSearchUserByTag()]);
}
