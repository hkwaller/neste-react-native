import * as StationActions from './stations';
import * as DepartureActions from './departures';

export const ActionCreators = Object.assign({}, 
    StationActions,
    DepartureActions
);