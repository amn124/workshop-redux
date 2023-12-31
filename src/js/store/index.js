import { createStore } from 'redux';
import combineReducers from '../reducers/index';

const initialState = {};
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(combineReducers, initialState, compose);

export default store;