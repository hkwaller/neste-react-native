import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const stations = createReducer({}, {
    [types.SET_STATIONS](state, action) {
        return action.stations;
    }
});
