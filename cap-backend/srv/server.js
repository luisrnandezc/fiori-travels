const cds = require('@sap/cds');
const cors = require('cors');

cds.on('bootstrap', (app) => {
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'OData-Version',
        'OData-MaxVersion',
        'x-csrf-token',
        'sap-cancel-on-close',
        'sap-contextid-accept',
        'Accept',
        'Accept-Language',
        'mime-version',
        'content-transfer-encoding',
      ],
      exposedHeaders: ['OData-Version', 'OData-MaxVersion', 'x-csrf-token'],
    }),
  );
});

module.exports = cds.server;
