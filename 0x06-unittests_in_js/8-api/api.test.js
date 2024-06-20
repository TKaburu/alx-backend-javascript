const chai = require('chai');
const request = require('request');

describe('Index page', () => {
  describe('GET /', () => {
    it('should test for  GET / request', (done) => {
      request('http://localhost:7865', (error, res, body) => {
        chai.expect(res.statusCode).to.equal(200);
        chai.expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});