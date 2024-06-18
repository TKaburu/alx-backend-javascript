const express = require('express');

const app = express();
// set hostname and port
// const hostName = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
