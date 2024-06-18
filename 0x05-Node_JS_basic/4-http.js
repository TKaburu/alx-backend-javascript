const { createServer } = require('node:http'); // http module

const port = 1245;
// create server
const app = createServer((req, res) => {
  res.statusCode = 200; // successful/ok status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app; // export app
