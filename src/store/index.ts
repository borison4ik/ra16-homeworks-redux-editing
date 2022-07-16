import { legacy_createStore } from 'redux';
import { rootReducer } from './redusers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = legacy_createStore(rootReducer, composeWithDevTools());
