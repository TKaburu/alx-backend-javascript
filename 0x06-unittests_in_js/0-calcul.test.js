const assert = require('assert')
const calculateNumber = require('./0-calcul')


describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.1, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
        assert.equal(calculateNumber(1, 1), 2);
        assert.equal(calculateNumber(0, 0), 0);
        assert.equal(calculateNumber(0.0, 0.0), 0);
        assert.equal(calculateNumber(-0.1, -0.9), -1);
    });

})