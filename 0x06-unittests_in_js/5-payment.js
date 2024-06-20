const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
    var a = totalAmount;
    var b = totalShipping;
    const sum = Utils.calculateNumber('SUM', a, b);

    console.log(`The total is: ${sum}`)

}

module.exports = sendPaymentRequestToApi