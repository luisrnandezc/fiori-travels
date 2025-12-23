// routes/bookings.js
// OData Bookings entity set + navigation

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
 * GET /odata/Bookings
 */
router.get('/', (req, res) => {
  const { bookings } = loadData();

  res.json({
    '@odata.context': '$metadata#Bookings',
    value: bookings,
  });
});

/**
 * GET /odata/Bookings('2061')
 */
router.get('/:id', (req, res) => {
  const { bookings } = loadData();
  const id = normalizeId(req.params.id);

  const booking = bookings.find((b) => b.BookingNumber === id);

  if (!booking) {
    return res.status(404).send('Booking not found');
  }

  res.json(booking);
});

/**
 * GET /odata/Bookings('2061')/Customer
 */
router.get('/:id/Customer', (req, res) => {
  const { bookings, customers } = loadData();
  const id = normalizeId(req.params.id);

  const booking = bookings.find((b) => b.BookingNumber === id);

  if (!booking) {
    return res.status(404).send('Booking not found');
  }

  const customer = customers.find(
    (c) => c.CustomerNumber === booking.CustomerNumber
  );

  if (!customer) {
    return res.status(404).send('Customer not found');
  }

  res.json(customer);
});

module.exports = router;
