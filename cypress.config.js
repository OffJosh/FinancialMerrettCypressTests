const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl:"https://www.financialmerrett.co.uk/",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
