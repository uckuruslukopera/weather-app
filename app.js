const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');
const utilities = require('./utilities/utilities');

const argsv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetach weather for',
        string: true
    }
}).help()
  .alias('help', 'h')
  .argv;

// geocode.geocodeAddress(argsv.address, (geocodeErrorMessage, geocodeResults) => {
//     if (geocodeErrorMessage) {
//         console.log(geocodeErrorMessage);
//     } else {
//         console.log(JSON.stringify(geocodeResults, null, 2));
//         forecast.getForecast(geocodeResults['lattitude'], geocodeResults['longtitude'], (forecastErrorMessage, forecastResults) => {
//             if (forecastErrorMessage) {
//                 console.log(forecastErrorMessage);
//             } else {
//                 console.log('Current status: ' + forecastResults.currently.summary);
//                 console.log('Current temperature: ' + Math.floor(forecast.convertFahrenheitToCelcius(forecastResults.currently.temperature)));
//             }
//         })
//     }
// });

geocode.geocodeAddress(argsv.address)
       .then((geocodeResult) => {
        console.log(JSON.stringify(geocodeResult, null, 2));
        return forecast.getForecast(geocodeResult.lattitude, geocodeResult.longtitude);
    }).then((forecastResult) => {
        console.log('Current status: ' + forecastResult.currently.summary);
        console.log('Current temperature: ' + Math.floor(utilities.convertFahrenheitToCelcius(forecastResult.currently.temperature)));
    }).catch(reason => console.log(reason));


