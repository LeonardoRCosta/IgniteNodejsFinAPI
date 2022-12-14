const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

app.listen(3333);

const customers = [];

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists)
    return res
      .status(400)
      .json({ error: 'Customer already exists', status: '400' });

  customers.push({ cpf, name, id: uuidv4(), statement: [] });

  return res.status(201).send();
});
