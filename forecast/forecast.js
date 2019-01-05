const request = require('request');
const config = require('../config/config');

const host = config.forecast.host;



const getForecast = (lattidue, longtitude, cb) => {
    const options = {
        url: `${host}/${config.forecast.forecast}/${config.forecast.key}/${lattidue},${longtitude}`,
        exclude: 'minutely,hourly,daily,alerts,flags',
        json: true
    };
    return new Promise((resolve, reject) => {
        request.get(options, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode === 200) {
                resolve(body);
            } else {
                reject(body);
            }
        });
    });
}

const convertFahrenheitToCelcius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

module.exports = {
    getForecast,
    convertFahrenheitToCelcius
};