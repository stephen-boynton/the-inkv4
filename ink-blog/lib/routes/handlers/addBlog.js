const Joi = require('joi');
const { createNewBlog } = require('../../dal');

module.exports = async function addAccountHandler(req, res) {
  try {
    await createNewBlog(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.send(err);
  }
};
