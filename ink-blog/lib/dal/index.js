const Account = require('./Account');
const mongoose = require('./database');

async function createNewBlog({ title, tag, author, images, body, tags }) {
  try {
    const blog = new Blog({
      title,
      tag,
      author,
      images,
      body,
      tags
    });

    // const result = await blot.save();
    return true;
  } catch (err) {
    throw err;
  }
}

async function getBlogById(id) {
  return await Blog.find({ _id: id });
}

async function getBlogsByProfileName(profileName) {
  return await Blog.find({ profile_name: profileName });
}

async function deleteBlog(id) {}

async function updateBlog(id) {}

async function getLatestBlogs(accountId) {}

module.exports = { createNewBlog };
