const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c6daue',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
