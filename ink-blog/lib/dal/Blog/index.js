const mongoose = require('mongoose');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const upload = require('./s3Client');

const BlogSchema = new mongoose.Schema({
  title: { type: String },
  tag: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  images: [{ type: String }],
  body: { type: String },
  date_created: { type: Date, default: moment() },
  date_updated: { type: Date },
  tags: [{ type: String }]
});

BlogSchema.statics.uploadPicToS3 = function(pic) {
  return upload(pic);
};

const Account = mongoose.model('Account', BlogSchema);

module.exports = Account;
