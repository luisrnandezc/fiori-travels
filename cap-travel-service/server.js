// server.js
// Entry point of the Node.js OData service

const express = require('express');
const cors = require('cors');

// Create Express application
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Simple test endpoint
app.get('/', (req, res) => {
  res.send('Travel OData Service is running');
});

// OData routes middleware
app.use('/odata', (req, res, next) => {
  // Add OData V4 version header
  res.setHeader('OData-Version', '4.0');

  // Apply CORS with exposed header
  cors({
    origin: '*',
    exposedHeaders: ['OData-Version'], // make the header visible to JS
  })(req, res, next);
});

app.use('/odata/$metadata', require('./routes/metadata'));
app.use('/odata/Customers', require('./routes/customers'));
app.use('/odata/Bookings', require('./routes/bookings'));

// Start server
const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
