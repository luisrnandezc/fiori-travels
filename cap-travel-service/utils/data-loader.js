// utils/data-loader.js
// Loads and normalizes travel JSON data

const fs = require('fs');
const path = require('path');

let cache = null;

function loadData() {
  if (cache) {
    return cache;
  }

  const filePath = path.join(__dirname, '..', 'data', 'travels.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(raw);

  const customers = [];
  const bookings = [];

  json.Customers.forEach((customer) => {
    const { _Bookings, ...customerData } = customer;

    customers.push(customerData);

    if (Array.isArray(_Bookings)) {
      _Bookings.forEach((booking) => {
        bookings.push({
          ...booking,
          CustomerNumber: customer.CustomerNumber,
        });
      });
    }
  });

  cache = { customers, bookings };
  return cache;
}

module.exports = {
  loadData,
};
