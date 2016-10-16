var proj4 = require('proj4');

proj4.defs('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs');


function getStationList() {

    const coords = proj4('EPSG:25832', {
        x: 10.7326733,
        y: 59.9322581
    });

    const url = `http://api.trafikanten.no/ReisRest/Stop/GetClosestStopsByCoordinates/?coordinates=x=${Math.round(coords.x)},y=${Math.round(coords.y)}&proposals=10`;

    fetch(url)
        .then(res => res.json())
        .then(responseData => {
            
            return responseData;
        })
        .done()
}

getStationList();

module.exports = { getStationList };