const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// GET /odata/Travels
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'data', 'travels.json');

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  res.json({
    '@odata.context': 'http://localhost:4004/odata/$metadata#Travels',
    value: data,
  });
});

module.exports = router;
