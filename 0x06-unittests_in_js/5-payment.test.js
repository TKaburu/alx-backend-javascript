const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');


describe('sendPaymentRequestToApi', function() {
    let spyTest;

    beforeEach(function() {
        spyTest = sinon.spy(console, 'log');
    });

    afterEach(function() {
        spyTest.restore();
    });

    it('should log "The total is: 120" and call console.log once for inputs 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);
        chai.expect(consoleSpy.calledOnce).to.be.true;
        chai.expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log "The total is: 20" and call console.log once for inputs 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);
        chai.expect(consoleSpy.calledOnce).to.be.true;
        chai.expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
});