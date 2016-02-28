import * as activities from './activities';
import * as selection from './selection';
import { combineReducers } from 'redux';

const reducer = combineReducers(Object.assign({}, activities,  selection));
export default reducer;
