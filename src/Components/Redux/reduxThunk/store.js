import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import counterReducer from './counterReducer';

export const thunkStore = createStore(counterReducer, applyMiddleware(thunk));
