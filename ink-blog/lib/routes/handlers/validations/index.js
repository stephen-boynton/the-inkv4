const { check, validationResult } = require('express-validator/check');

module.exports = {
  addBlogChecks: [
    check('profileName').isString(),
    check('firstName').isString(),
    check('lastName').isString(),
    check('password').isString(),
    check('email').isEmail()
  ],
  validateAddBlog: (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(422).json({ errors: error.mapped() });
    }
    next();
  }
};
