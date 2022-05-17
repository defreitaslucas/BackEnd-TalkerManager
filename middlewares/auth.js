const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization || authorization === undefined) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
  } catch (err) {
    return res.status(500).end();
  }
};

module.exports = { authToken };