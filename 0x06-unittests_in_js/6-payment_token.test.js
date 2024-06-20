const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then(response => {
                chai.expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch(done);
    });

    it('should do nothing when success is false', () => {
        const result = getPaymentTokenFromAPI(false);
        chai.expect(result).to.be.undefined;
    });
});