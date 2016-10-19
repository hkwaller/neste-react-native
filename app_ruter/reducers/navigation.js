import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { NavigationExperimental, StatusBar } from 'react-native';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils
} = NavigationExperimental

export const navigationState = createReducer({ index: 0, routes: [
    { key: 'Home' },
    { key: 'Departures' }
]}, {
    [types.NAVIGATION_FORWARD](state, action) {
        return NavigationStateUtils.forward(state);
    },
    [types.NAVIGATION_BACK](state, action) {
        return NavigationStateUtils.back(state);
    }
});

export const navigationParams = createReducer({}, {
    [types.NAVIGATION_FORWARD](state, action) {
        return action.state;
    }
})