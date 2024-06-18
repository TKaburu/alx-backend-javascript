const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
// set hostname and port
// const hostName = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// students route should give the student list but somthng not working
app.get('/students', async (req, res) => {
  res.send('This is the list of our students\n');
  const msg = 'This is the list of our students\n';
  try {
    const content = await countStudents(process.argv[2]);
    res.send(`${msg}${content.join('\n')}`);
  } catch (error) {
    res.send(`$msg}${error.message} `);
  }
});

app.listen(port, () => {
});

module.exports = app;
