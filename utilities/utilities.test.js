const utilities = require('./utilities');
const expect = require('chai').expect;

it('should convert fahrenheit to celcius', () => {
    const resp = utilities.convertFahrenheitToCelcius(32);
    const correctResp = 0;
    expect(resp).to.be.a('number');
    expect(resp).to.equal(correctResp);
    expect(resp).not.to.equal(32);
    expect(resp).not.to.be.a('float');

    // if (resp !== correctResp) {
    //     throw new Error(`Expected ${correctResp}, but got ${resp}`);
    // }
});


