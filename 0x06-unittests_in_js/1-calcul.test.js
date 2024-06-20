const assert = require('assert')
const calculateNumber = require('./1-calcul')


describe('calculateNumber', () => {
    it('should return the addition of rounded numbers for the type "SUM"', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        assert.equal(calculateNumber('SUM', 0.0, 0.0), 0);
        assert.equal(calculateNumber('SUM', 1, 1), 2);
        assert.equal(calculateNumber('SUM', -1, -1), -2);
        assert.equal(calculateNumber('SUM', -5, 9), 4);
        
    });

    it('should return the subtraction of rounded numbers', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        assert.equal(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
        assert.equal(calculateNumber('SUBTRACT', 1, 1), 0);
        assert.equal(calculateNumber('SUBTRACT', -5, 9), -14);
        
    });

    it('should return the division of rounded numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        assert.equal(calculateNumber('DIVIDE', 5, 2), 2.5);
        assert.equal(calculateNumber('DIVIDE', 1, 1), 1);
        assert.equal(calculateNumber('DIVIDE', -5, 9), -0.5555555555555556);
    });

    it('should return error if round(b) === 0', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

})