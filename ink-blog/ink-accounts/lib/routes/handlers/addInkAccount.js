const Joi = require("joi");

module.exports = {
  method: "PUT",
  path: "/users/",
  config: {
    validate: {
      payload: {
        first_name: Joi.string()
      }
    }
  },

  handler: function handler(req, res) {
    console.log("Hello!");
  }
};
