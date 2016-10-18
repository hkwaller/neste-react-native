import * as StationActions from './stations';
import * as DepartureActions from './departures';
import * as NavigationActions from './navigation';

export const ActionCreators = Object.assign({}, 
    StationActions,
    DepartureActions,
    NavigationActions
);