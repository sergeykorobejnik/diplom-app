import { configureStore, Store } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	Persistor,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';

type CreateStore = {
	store: Store;
	persistor: Persistor;
};
const persistConfig = {
	key: 'persist',
	storage,
	whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = (): CreateStore => {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware => [
			sagaMiddleware,
			...getDefaultMiddleware({
				thunk: false,
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}),
		],
	});

	sagaMiddleware.run(rootSaga);

	const persistor = persistStore(store);

	return {
		store,
		persistor,
	};
};
export default createStore;
