const Joi = require("joi");

module.exports = {
  method: "PUT",
  path: "/users/",
  config: {
    validate: {
      payload: {
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string(),
        avatar: Joi.string()
      }
    }
  },

  handler: function handler(req, res) {
    console.log("Hello!");
  }
};
