'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('*', (req, res, next) => {
  if (req.method !== 'GET') {
    res.status(501).send('I don\'t do that.\n');
  }
  next();
});

app.get('/', (req, res) => {
  if (req.query.q) res.send(req.query.q);
  else res.send('OK.\n');
});

app.get('/:stuff', (req, res) => {
  if(req.query.q) {
    res.send(`${req.params.stuff} => ${req.query.q}`);
  } else res.send(req.params.stuff);
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));
