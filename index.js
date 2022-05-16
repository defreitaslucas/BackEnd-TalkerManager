const express = require('express');
const bodyParser = require('body-parser');
const { readArq } = require('./helpers/data');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res, _next) => {
  const talker = await readArq();
  if (talker) {
    return res.status(200).json(talker);
  }
  return res.status(200).send([]);
});

app.get('/talker/:id', async (req, res, _next) => {
  const { id } = req.params;
  const talker = await readArq();
  const palestrante = talker.find((user) => user.id === Number(id));

  if (!palestrante) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(palestrante);
});

app.post('/login', async (_req, _res, _next) => []);

app.listen(PORT, () => {
  console.log('Online');
});
