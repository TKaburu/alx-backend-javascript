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

  describe('cart functionality', () => {
    it('should return status code 200 when id is a number', (done) => {
      request('http://localhost:7865/cart/55', (error, res, body) => {
        chai.expect(res.statusCode).to.equal(200);
        chai.expect(body).to.equal('Payment methods for cart 55');
        done();
      });
    });

    it('should return status code 404 when id is not a number', (done) => {
      request('http://localhost:7865/cart/tkcodes', (error, res, body) => {
        chai.expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should test for GET /available_payments', (done) => {
      request('http://localhost:7865/available_payments', (err, res, body) => {
        chai.expect(res.statusCode).to.equal(200);
        chai.expect(body).to.equal(JSON.stringify({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          }
        }));
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should test for POST /login', (done) => {
      request.post({
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:7865/login',
        body: JSON.stringify({ userName: 'Tkcodes' }),
      }, (error, res, body) => {
        chai.expect(res.statusCode).to.equal(200);
        chai.expect(body).to.equal('Welcome Tkcodes');
        done();
      });
    });
  });
});