import * as activities from './activities';
import * as selection from './selection';
import * as companies from './companies';
import { combineReducers } from 'redux';

const reducer = combineReducers(Object.assign({}, activities,  selection, companies));
export default reducer;
