require('dotenv').config();

module.exports = {
    geocode: {
        host: 'http://www.mapquestapi.com/geocoding/v1',
        key: process.env.GEOCODE_KEY,
        address: 'address'
    },
    forecast: {
        host: 'https://api.darksky.net',
        key: process.env.FORECAST_KEY,
        forecast: 'forecast'
    }
}