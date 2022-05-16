const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const FILENAME = 'talker.json';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res, _next) => {
    const data = await fs.readFile(FILENAME, 'utf8');
    if (data) {
      return res.status(200).json(JSON.parse(data));
    }
    return res.status(200).json(JSON.parse([]));
});

app.listen(PORT, () => {
  console.log('Online');
});
