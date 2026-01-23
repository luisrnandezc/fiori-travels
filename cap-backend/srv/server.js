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
      ],
      exposedHeaders: ['OData-Version', 'OData-MaxVersion'],
    }),
  );
});

module.exports = cds.server;
