const request = require('request');
const config = require('../config/config');

const host = config.geocode.host;

const geocodeAddress = (addressOption) => {
    const encodedAddress = encodeURIComponent(addressOption);
    const options = {
        url: `${host}/${config.geocode.address}`,
        qs: {
            key: config.geocode.key,
            location: encodedAddress
        },
        json: true
    }

    return new Promise((resolve, reject) => {
        request.get(options, (error, response, body) => {
            if (error) reject(error);
            if (body.info.statuscode === 0) {
                const realResults = body['results'][0]['locations'].filter(l => l.latLng.lat !== 39.390897 && l.latLng.lat !== -99.066067);
                if (realResults && realResults.length) {
                    resolve({
                        lattitude: realResults[0]['latLng']['lat'], 
                        longtitude: realResults[0]['latLng']['lng']
                    });
                } else {
                    reject('There is no location by this query');
                }
            } else if(body.info.statuscode === 400)  {
                reject(body.info.messages[0]);
            }
        })
    });


}


module.exports = {
    geocodeAddress
}