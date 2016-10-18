import { combineReducers } from 'redux';
import * as stationsReducer from './stations';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(
  stationsReducer,
  navigationReducer
));