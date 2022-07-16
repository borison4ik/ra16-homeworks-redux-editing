import { combineReducers } from 'redux';
import { servisesReduser } from './servisesReduser';

export const rootReducer = combineReducers({
  servises: servisesReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
