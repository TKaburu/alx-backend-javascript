const chai = require('chai')
const calculateNumber = require('./1-calcul')


describe('calculateNumber', () => {
    it('should return the addition of rounded numbers for the type "SUM"', () => {
        chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        chai.expect(calculateNumber('SUM', 0.0, 0.0), 0);
        chai.expect(calculateNumber('SUM', 1, 1), 2);
        chai.expect(calculateNumber('SUM', -1, -1), -2);
        chai.expect(calculateNumber('SUM', -5, 9), 4);
        
    });

    it('should return the subtraction of rounded numbers', () => {
        chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        chai.expect(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
        chai.expect(calculateNumber('SUBTRACT', 1, 1), 0);
        chai.expect(calculateNumber('SUBTRACT', -5, 9), -14);
        
    });

    it('should return the division of rounded numbers', () => {
        chai.expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        chai.expect(calculateNumber('DIVIDE', 5, 2), 2.5);
        chai.expect(calculateNumber('DIVIDE', 1, 1), 1);
        chai.expect(calculateNumber('DIVIDE', -5, 9), -0.5555555555555556);
        chai.expect(calculateNumber('DIVIDE', -9.3, 2.5), 3.72)
    });

    it('should return error if round(b) === 0', () => {
        chai.expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

})