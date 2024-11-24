const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    viewportHeight:1000,
    viewportHeight:850,
    baseUrl: 'https://app.bizimply.com/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
