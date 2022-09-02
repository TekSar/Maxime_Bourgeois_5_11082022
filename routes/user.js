//import
const express = require('express');
const router = express.Router();
//import de express-rate-limit qui permet de limiter les demandes d'inscription d'ume même adresse ip (5 par heures)
const rateLimit = require('express-rate-limit');

//import du controller
const userCtrl = require('../controllers/user');

//import du middleware controle-email
const controle_email = require('../middleware/controle-email');

//import du middleware password
const password = require('../middleware/password');

//import du middleware rate-limit
const rate_limit = require('../middleware/rate-limit');


//Creation d'un nouvel utilisateur , limite la création de compte a 5 par heure et par IP, controle et chiffre l'email , controle et hash le password
router.post(
  '/signup',
  controle_email,
  password,
  userCtrl.signup
);
//Vérification des infos de l'utilisateur pour la connection
router.post('/login',  rate_limit, userCtrl.login);

module.exports = router;
