const Joi = require('joi');
const { createNewAccount } = require('../../dal');
const { addInkAccountSchema } = require('./validations');

module.exports = async function addAccountHandler(req, res) {
  try {
    await createNewAccount(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
};
