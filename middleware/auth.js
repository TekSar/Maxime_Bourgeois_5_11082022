//package jsonwebtoken
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'fdbj26$q5ùsdqsd9fçdqè4');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw ' User ID non valide';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Requête invalide !'),
    });
  }
};
