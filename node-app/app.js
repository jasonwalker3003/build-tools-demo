const express = require('express');
const { greet } = require('./greet');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(greet('DevOps') + '\n');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
