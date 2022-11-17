import {
	reqSingUp,
	reqSingUpError,
	reqSingUpSuccess,
} from '../../reducers/auth.reducer';
import { call, takeEvery, put } from 'redux-saga/effects';
import ApiBase from '../../../api/api.base';
import { ApiResponse, ResponseAuthPayload } from '../../../types';
import { History } from '../../../constants/history';

function* workerSignUp(action: ReturnType<typeof reqSingUp>) {
	try {
		const res: ApiResponse<ResponseAuthPayload> = yield call(
			ApiBase.post,
			'/api/v1/auth/sign-up',
			action.payload,
		);
		console.log(res);
		if (res.success) {
			yield put(reqSingUpSuccess(res.value));
		} else {
			yield put(reqSingUpError());
		}
	} catch (e) {
		console.log(e);
		yield put(reqSingUpError());
	}
}

export default function* watchSignUp() {
	yield takeEvery(reqSingUp.type, workerSignUp);
}
