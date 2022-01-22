import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [logger, thunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

// export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
// export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

export default store;