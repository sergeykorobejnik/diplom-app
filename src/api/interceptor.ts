import axios from 'axios';
import { store } from '../redux';
// import { logoutSuccess, refreshToken } from '../redux/reducers/auth.reducer';
import { setAuthHeaderToken } from '../utils';
// import { Alerter } from '../helpers';

export default function intercept(): void {
	axios.defaults.baseURL =
		import.meta.env.VITE_BASE_URL || 'http://localhost:5001';
	// axios.defaults.baseURL = 'http://localhost:5001';

	// let isRefreshing = false;
	// let subscribers: Array<(value: string) => void> = [];
	//
	// axios.interceptors.response.use(undefined, err => {
	// 	const {
	// 		config,
	// 		response: { status },
	// 	} = err;
	// 	const originalRequest = config;
	// 	if (status === 401) {
	// 		if (!isRefreshing) {
	// 			isRefreshing = true;
	// 			axios
	// 				.post('/api/v1/auth/token/refresh', {
	// 					accessToken: store.getState().auth.token.accessToken,
	// 					refreshToken: store.getState().auth.token.refreshToken,
	// 				})
	// 				.then(res => {
	// 					isRefreshing = false;
	// 					onRefreshed(res.data.value.accessToken);
	// 					// store.dispatch(refreshToken(res.data.value));
	// 					setAuthHeaderToken(res.data.value.accessToken);
	// 					subscribers = [];
	// 				})
	// 				.catch(err => {
	// 					// Alerter.error(
	// 					// 	'Your credentials expired, and you should sign in again',
	// 					// );
	// 					// store.dispatch(logoutSuccess());
	// 				});
	// 		}
	// 		const requestSubscribers = new Promise(resolve => {
	// 			subscribeTokenRefresh((token: string) => {
	// 				originalRequest.headers.Authorization = `Bearer ${token}`;
	// 				resolve(axios(originalRequest));
	// 			});
	// 		});
	// 		return requestSubscribers;
	// 	}
	//
	// 	return Promise.reject(err);
	// });
	//
	// function subscribeTokenRefresh(cb: (value: string) => void) {
	// 	subscribers.push(cb);
	// }
	//
	// function onRefreshed(token: string) {
	// 	subscribers.map(cb => cb(token));
	// }
}
