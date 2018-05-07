const router = require('express').Router();
const { addAccountHandler } = require('./handlers');
const { body } = require('express-validator/check');
const {
  validateAddAccount,
  addAccountChecks
} = require('./handlers/validations');

router
  .use([addAccountChecks, validateAddAccount])
  .route('/users/')
  .post(addAccountHandler);

module.exports = router;
