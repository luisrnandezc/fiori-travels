// routes/metadata.js
const express = require('express');
const path = require('path');

const router = express.Router();

// GET /odata/$metadata
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'metadata', 'metadata.xml'));
});

module.exports = router;
