// routes/customers.js
// OData Customers entity set

const express = require('express');
const { loadData } = require('../utils/data-loader');

const router = express.Router();

router.get('/', (req, res) => {
  const { customers } = loadData();

  res.json({
    '@odata.context': '$metadata#Customers',
    value: customers,
  });
});

module.exports = router;
