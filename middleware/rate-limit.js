const rateLimit = require('express-rate-limit');

const loginAccountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // limite a 10 tentative de connnexion par heure 
    message:
      'Too many attempts from this IP, please try again after an hour',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });

module.exports = loginAccountLimiter;