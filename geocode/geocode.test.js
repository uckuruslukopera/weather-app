const expect = require('chai').expect;
const geocode = require('./geocode');

it('should return lattitude and longtitude', () => {
    return geocode.geocodeAddress('besiktas')
                  .then(resp => {
                    expect(resp).to.be.a('object');
                    expect(resp.lattitude).to.be.equal(41.071618);
                    expect(resp.longtitude).to.be.equal(29.030538);
                  },reason => expect(reason).to.be.a('object'));
                
});
