const router = require('express').Router();
const { addBlogHandler } = require('./handlers');
const { validateAddBlog, addBlogChecks } = require('./handlers/validations');

router
  .use([addBlogChecks, validateAddBlog])
  .route('/users/')
  .post(addBlogHandler);

module.exports = router;
