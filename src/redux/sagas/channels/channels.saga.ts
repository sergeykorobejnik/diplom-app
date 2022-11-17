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
import { ApiResponse, ResponseAuthPayload, User } from '../../../types';
import { Alerter } from '../../../utils';
import { History } from '../../../constants/history';
import { store } from '../../index';
import {
	setUsersByTag,
	setUsersByTagSuccess,
} from '../../reducers/channels.reducer';

function* workerSearchUserByTag(action: ReturnType<typeof setUsersByTag>) {
	try {
		const res: ApiResponse<{ users: Array<User['tag']> }> = yield call(
			ApiBase.get,
			`/api/v1/channels/users-by-tag?recipientTag=${
				action.payload
			}&userTag=${store.getState().auth.user.tag}`,
			{},
		);
		console.log(res);
		if (res.success) {
			yield put(setUsersByTagSuccess(res.value.users));
		} else {
			Alerter.error(res.errors?.[0]);
		}
	} catch (e) {
		console.log(e);
		yield put(reqSingUpError());
	}
}

export default function* watchSearchUserByTag() {
	yield takeEvery(setUsersByTag.type, workerSearchUserByTag);
}
