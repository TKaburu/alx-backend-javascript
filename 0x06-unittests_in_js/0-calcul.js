const add = require('./add');

function calculateNumber (a, b) {
    return add(Math.round(a), Math.round(b))
}

module.exports = calculateNumber
