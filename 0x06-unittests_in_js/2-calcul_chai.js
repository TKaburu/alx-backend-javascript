const add = require('./add');
const subtract = require('./subtract')
const divide = require('./divide')

function calculateNumber (type, a, b) {
    if (type === 'SUM') {
        return add(Math.round(a), Math.round(b))
    } else if (type === 'SUBTRACT') {
        return subtract(Math.round(a), Math.round(b))
    } else if (type === 'DIVIDE') {
        if (Math.round(b) === 0 ) {
            return ('Error')
        }
        return divide(Math.round(a), Math.round(b))
    }
        
}

module.exports = calculateNumber
