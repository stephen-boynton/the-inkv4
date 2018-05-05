const Joi = require('joi');
const { createNewAccount } = require('../../dal');

module.exports = {
  method: 'PUT',
  path: '/users/',
  config: {
    validate: {
      payload: {
        firstName: Joi.string(),
        lastName: Joi.string(),
        profileName: Joi.string(),
        profilePic: Joi.string().base64(),
        email: Joi.string(),
        socialLogin: Joi.string(),
        password: Joi.string()
      }
    }
  },

  handler: async function handler(request, reply) {
    console.log(request);
    try {
      await createNewAccount(request.payload);
      reply().code(200);
    } catch (e) {
      reply(e);
    }
  }
};
