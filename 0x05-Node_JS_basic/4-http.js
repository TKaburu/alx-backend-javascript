const http = require('node:http'); // http module

// set hostname and port
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200; // ok/successful status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
});

module.exports = app; // export app
