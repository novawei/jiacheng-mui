import {combineReducers} from 'redux-immutable';
import common from './common';
import school from './school';
import data from './data';

const rootReducer = combineReducers({
	common,
	school,
	data
});

export default rootReducer;