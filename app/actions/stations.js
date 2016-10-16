import * as types from './types';
import Api from '../lib/api';

export function setStations({stations}) {
    return {
        type: types.SET_STATIONS,
        stations
    }
}

export function getStations(lat, lng) {
    return (dispatch, getState) => {
        const params = [
            `originCoordLong=${lng}`,
            `originCoordLat=${lat}`,
            `maxNo=10`,
            `format=json`
        ].join('&');

        return Api.get(`/location.nearbystops?${params}`).then(res => {
            if (res.stopLocationOrCoordLocation) {
                const stations = res.stopLocationOrCoordLocation.map(station => {
                    return station.StopLocation;
                })

                dispatch(setStations({stations}));
                return;
            }

            console.log("something went booboo");
        }).catch(exception => {
            console.log(exception);
        });
    }
}