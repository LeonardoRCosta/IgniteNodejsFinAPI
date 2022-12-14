const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

app.listen(3333)

const customers = [];

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const id = uuidv4();

  customers.push({ cpf, name, id, statement: [] });

  return res.status(201).send();
});
