const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: 'c6daue',
  e2e: {
    baseUrl: process.env.base_url,
    env: {
      username: process.env.username,
      password: process.env.password
    }
  },
});
