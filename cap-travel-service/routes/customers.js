// routes/customers.js
// OData Customers entity set

const express = require('express');
const { loadData } = require('../utils/data-loader');

const router = express.Router();

/**
 * Helper: normalize OData key
 * '1'  -> 1
 * "1"  -> 1
 * 1    -> 1
 */
function normalizeId(id) {
  return id.replace(/^['"]|['"]$/g, '');
}

/**
 * GET /odata/Customers
 * Supports:
 *  - $expand=Bookings
 */

router.get('/', (req, res) => {
  const { customers, bookings } = loadData();
  const expandBookings = req.query.$expand === 'Bookings';

  const result = customers.map((customer) => {
    if (expandBookings) {
      return {
        ...customer,
        Bookings: bookings.filter(
          (b) => b.CustomerNumber === customer.CustomerNumber
        ),
      };
    }
    return customer;
  });

  res.json({
    '@odata.context': expandBookings
      ? '$metadata#Customers(Bookings)'
      : '$metadata#Customers',
    value: result,
  });
});

/**
 * GET /odata/Customers('1')
 */

router.get('/:id', (req, res) => {
  const { customers } = loadData();

  // Strip single or double quotes
  const id = normalizeId(req.params.id);

  const customer = customers.find((c) => c.CustomerNumber === id);

  if (!customer) {
    return res.status(404).send('Customer not found');
  }

  res.json(customer);
});

/**
 * GET /odata/Customers('1')/Bookings
 */
router.get('/:id/Bookings', (req, res) => {
  const { customers, bookings } = loadData();
  const id = normalizeId(req.params.id);

  const customer = customers.find((c) => c.CustomerNumber === id);
  if (!customer) return res.status(404).send('Customer not found');

  const customerBookings = bookings.filter((b) => b.CustomerNumber === id);

  res.json({
    '@odata.context': '$metadata#Bookings',
    value: customerBookings,
  });
});

module.exports = router;
