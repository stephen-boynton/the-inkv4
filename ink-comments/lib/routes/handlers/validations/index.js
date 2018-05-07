const { check, validationResult } = require('express-validator/check');

module.exports = {
  addAccountChecks: [
    check('profileName').isString(),
    check('firstName').isString(),
    check('lastName').isString(),
    check('password').isString(),
    check('email').isEmail()
  ],
  validateAddAccount: (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.mapped() });
    }
    next();
  }
};
