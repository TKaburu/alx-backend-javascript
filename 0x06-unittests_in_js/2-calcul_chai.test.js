const chai = require('chai')
const calculateNumber = require('./1-calcul')


describe('calculateNumber', () => {
    it('should return the addition of rounded numbers for the type "SUM"', () => {
        chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        chai.expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
        chai.expect(calculateNumber('SUM', 1, 1)).to.equal(2);
        chai.expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
        chai.expect(calculateNumber('SUM', -5, 9)).to.equal(4);
        
    });

    it('should return the subtraction of rounded numbers', () => {
        chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        chai.expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
        chai.expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
        chai.expect(calculateNumber('SUBTRACT', -5, 9)).to.equal(-14);
        
    });

    it('should return the division of rounded numbers', () => {
        chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        chai.expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
        chai.expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
        chai.expect(calculateNumber('DIVIDE', -5, 9)).to.equal(-0.5555555555555556);
    });

    it('should return error if round(b) === 0', () => {
        chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

})