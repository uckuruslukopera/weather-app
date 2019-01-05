const expect = require('chai').expect;
const forecast = require('./forecast');
const utilities = require('../utilities/utilities');

it('should return the right temperature', () => {
    return forecast.getForecast(41.045033, 28.977135)
                   .then(resp => {
                       expect(resp.currently.temperature).to.below(70);
                       expect(resp.currently.temperature).to.above(20);
                   }, reason => expect(reason).to.be.a('string'));

});