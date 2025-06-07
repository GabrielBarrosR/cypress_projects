require ('dotenv').config()

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.token = process.env.token;
      config.env.url = process.env.url;
      config.env.email = process.env.email;
      config.env.password = process.env.password;
      return config;
    },
  },
});
