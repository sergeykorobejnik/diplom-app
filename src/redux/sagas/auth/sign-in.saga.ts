import {
	reqSignIn,
	reqSingInError,
	reqSingInSuccess,
	reqSingUp,
	reqSingUpError,
	reqSingUpSuccess,
} from '../../reducers/auth.reducer';
import { call, takeEvery, put } from 'redux-saga/effects';
import ApiBase from '../../../api/api.base';
import { ApiResponse, ResponseAuthPayload } from '../../../types';
import { Alerter } from '../../../utils';
import { History } from '../../../constants/history';

function* workerSignIn(action: ReturnType<typeof reqSingUp>) {
	try {
		const res: ApiResponse<ResponseAuthPayload> = yield call(
			ApiBase.post,
			'/api/v1/auth/sign-in',
			action.payload,
		);
		console.log(res);
		if (res.success) {
			yield put(reqSingInSuccess(res.value));
			History.push('/');
		} else {
			yield put(reqSingInError());
			Alerter.error(res.errors?.[0]);
		}
	} catch (e) {
		console.log(e);
		yield put(reqSingUpError());
	}
}

export default function* watchSignIn() {
	yield takeEvery(reqSignIn.type, workerSignIn);
}
