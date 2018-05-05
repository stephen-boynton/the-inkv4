const Account = require('./Account');

async function createNewAccount({
  firstName,
  lastName,
  profileName,
  profilePic,
  email,
  socialLogin,
  password
}) {
  const account = new Account({
    first_name: firstName,
    last_name: lastName,
    profile_name: profileName,
    profile_pic: profilePic,
    email,
    social_login: socialLogin,
    password: password
  });
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
