import * as types from './types';
import Api from '../lib/api';
import proj4 from 'proj4';
import geolib from 'geolib';

proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs');

export function setStations({stations}) {
    return {
        type: types.SET_STATIONS,
        stations
    }
}

export function getStations(lat, lng) {
    return (dispatch, getState) => {
        const coords = proj4('EPSG:25832', {
            x: lng,
            y: lat
        });

        const params = [
            `coordinates=x=${Math.round(coords.x)},y=${Math.round(coords.y)}`,
            `proposals=20`
        ].join('&');

        return Api.get(`Stop/GetClosestStopsByCoordinates/?${params}`).then(res => {
            let obj = {
                favorites: [],
                regular: [],
                hasStations: false
            };

            const stations = res.map(station => {
                let latLngXY = proj4('EPSG:25832', 'WGS84', {
                    x: station.X,
                    y: station.Y
                });

                station.Distance = geolib.getDistance({
                    latitude: lat,
                    longitude: lng
                }, {
                    latitude: latLngXY.y,
                    longitude: latLngXY.x
                });

                return station;
            })

            console.log(stations);

            dispatch(setStations({stations}));
        }).catch(exception => {
            console.log(exception);
        });
    }
}