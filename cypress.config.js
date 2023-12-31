const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

 

async function setupNodeEvents(on, config) {

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,

await preprocessor.addCucumberPreprocessorPlugin(on, config);

on("file:preprocessor", browserify.default(config));

return config;

}

 

module.exports = defineConfig({

  e2e: {

    setupNodeEvents,

    baseUrl:'https://proxima.sisprevweb.com.br/PortalTransparencia01/admin',

    watchForFileChanges:false,

    video: false,

    chromeWebSecurity: false,

    experimentalModifyObstructiveThirdPartyCode: true,

    defaultCommandTimeout: 15000,

    viewportWidth: 1750,

    viewportHeight: 720,

    specPattern: [

      'cypress/e2e/tests/*/features/**/*.feature',

    ]

  },

});
