const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  it('should test for Utils.calculateNumber()', () => {
    const stubTest = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyTest = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    chai.expect(stubTest.calledWith('SUM', 100, 20)).to.be.true;
    chai.expect(stubTest.alwaysReturned(10)).to.be.true;
    chai.expect(spyTest.calledWith('The total is: 10')).to.be.true;

    stubTest.restore();
    spyTest.restore();
  });
});