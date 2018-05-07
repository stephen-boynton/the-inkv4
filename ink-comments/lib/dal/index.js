const Account = require('./Account');
const mongoose = require('./database');

async function createNewAccount({
  firstName,
  lastName,
  profileName,
  profilePic,
  email,
  socialLogin,
  password
}) {
  try {
    const hashPass = Account.generateHash(password);
    const uploadImage = Account.uploadPicToS3(profilePic);
    console.log(uploadImage);
    const account = new Account({
      first_name: firstName,
      last_name: lastName,
      profile_name: profileName,
      profile_pic: profilePic,
      email,
      social_login: socialLogin,
      password: hashPass
    });

    // const result = await account.save();
    return true;
  } catch (err) {
    throw err;
  }
}

async function getAccountById(id) {
  return await Account.find({ _id: id });
}

async function getAccountByProfileName(profileName) {
  return await Account.find({ profile_name: profileName });
}

async function deleteAccount(accountId) {}

async function updateAccount(accountId) {}

async function getMultipleAccounts(accountId) {}

module.exports = { createNewAccount, getAccountById, getAccountByProfileName };
