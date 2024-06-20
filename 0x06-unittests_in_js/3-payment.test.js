const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should test for Utils.calculateNumber()', () => {
    const testSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    chai.expect(testSpy.calledWith('SUM', 100, 20)).to.be.true;
    testSpy.restore();
  });
});