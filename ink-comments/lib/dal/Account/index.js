const mongoose = require('mongoose');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const upload = require('./s3Client');

const AccountSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  profile_name: { type: String, unique: true },
  profile_pic: {
    type: String,
    default:
      'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
  },
  email: { type: String },
  social_login: { type: String },
  password: { type: String },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
  promoted_own: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
  promoted_other: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
  date_created: { type: Date, default: moment() },
  date_modified: { type: Date },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
});

AccountSchema.statics.uploadPicToS3 = function(pic) {
  return upload(pic);
};

AccountSchema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
AccountSchema.statics.validPassword = function(password, dbpassword, done) {
  bcrypt.compare(password, dbpassword, (err, isMatch) => {
    console.log('password check');
    done(err, isMatch);
  });
};

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
