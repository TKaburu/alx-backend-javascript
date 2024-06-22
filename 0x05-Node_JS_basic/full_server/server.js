const express = require('express');

const app = express();
const index = require('./routes/index');

app.listen(1245, () => {
  console.log('server started');
});
app.use('/', index);
app.use('/students', index);
app.use('/students/:major', index);

export default app;