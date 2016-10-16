import { combineReducers } from 'redux';
import * as stationsReducer from './stations';

export default combineReducers(Object.assign({}, 
    stationsReducer
));