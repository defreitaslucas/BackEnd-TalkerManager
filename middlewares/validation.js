const validationEmail = (req, res, next) => {
  const { email } = req.body;
  const emailValid = (/^\S+@\S+\.\S+$/).test(email);
  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (emailValid !== true) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validationPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length === 0) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < 6) {
    return res.status(400)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

const validationName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === undefined) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validationAge = (req, res, next) => {
  const { age } = req.body;
  if (!age || age === undefined) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (Number(age) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validationTalk = (req, res, next) => {
  const { body } = req;
  const { talk } = req.body;

  if (Object.values(body).length !== 3 || Object.values(talk).length !== 2) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

const validationDate = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const validDate = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(watchedAt);
  if (!validDate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validationRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (Number(rate) < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = { 
  validationEmail,
  validationPassword,
  validationName,
  validationAge,
  validationTalk,
  validationDate,
  validationRate,
};