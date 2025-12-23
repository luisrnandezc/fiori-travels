// routes/bookings.js
// OData Bookings entity set

const express = require('express');
const { loadData } = require('../utils/data-loader');

const router = express.Router();

router.get('/', (req, res) => {
  const { bookings } = loadData();

  res.json({
    '@odata.context': '$metadata#Bookings',
    value: bookings,
  });
});

module.exports = router;
