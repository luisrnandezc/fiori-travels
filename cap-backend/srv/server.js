const cds = require('@sap/cds');
const cors = require('cors');

cds.on('bootstrap', (app) => {
  app.use(cors()); // This enables CORS for ALL origins
});

module.exports = cds.server;
