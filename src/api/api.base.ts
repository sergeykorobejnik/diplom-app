import axios from 'axios';
import { ApiResponse } from '../types';
import { store } from '../redux';
import intercept from './interceptor';
import { setAuthHeaderToken } from '../utils';

type KeyValue<U> = {
	[key: string]: U;
};
intercept();

class Api<T> {
	async get(url: string, params: any, headers: KeyValue<string> = {}) {
		const token = store.getState().auth.user?.token;
		setAuthHeaderToken(token);
		const response = await axios
			.get(url, {
				params,
				headers: {
					...headers,
				},
			})
			.catch(err => {
				return { data: err.response.data };
			});
		return response.data;
	}

	async post(
		url: string,
		body: T,
		headers: KeyValue<string> = {},
	): Promise<ApiResponse<any>> {
		const token = store.getState().auth.user?.token;
		setAuthHeaderToken(token);
		const response = await axios
			.post(url, body, {
				headers: {
					...headers,
				},
			})
			.catch(err => ({ data: err.response.data }));
		return response.data;
	}

	async put(url: string, body: T, headers: KeyValue<string> = {}) {
		const token = store.getState().auth.user?.token;
		setAuthHeaderToken(token);
		const response = await axios
			.put(url, body, {
				headers: {
					...headers,
				},
			})
			.catch(err => ({
				data: err.response.data,
			}));
		return response.data;
	}

	async patch(url: string, body: T, headers: KeyValue<string> = {}) {
		const token = store.getState().auth.user?.token;
		setAuthHeaderToken(token);
		const response = await axios
			.patch(url, body, {
				headers: {
					...headers,
				},
			})
			.catch(err => ({
				data: err.response.data,
			}));
		return response.data;
	}

	async delete(url: string, body?: T, headers: KeyValue<string> = {}) {
		const token = store.getState().auth.user?.token;
		setAuthHeaderToken(token);
		const response = await axios
			.delete(url, {
				data: body,
				headers,
			})
			.catch(err => ({
				data: err.response.data,
			}));
		return response.data;
	}
}

export default new Api();
