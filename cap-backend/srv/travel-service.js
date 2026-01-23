const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { Customers } = this.entities;

  this.after('READ', 'Customers', (each) => {
    if (each.Discount > 15) {
      each.CustomerName += ' (VIP)';
    }
  });
});
