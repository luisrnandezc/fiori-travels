const cds = require('@sap/cds');
const cors = require('cors');

cds.on('bootstrap', (app) => {
  app.use(
    cors({
      origin: '*', // Allows any origin
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  ); // This enables CORS for ALL origins
});

module.exports = cds.server;
