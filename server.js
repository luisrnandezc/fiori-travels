// server.js
// Entry point of the Node.js OData service

const express = require('express');
const cors = require('cors');

// Create Express application
const app = express();

// Allow calls from browser
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Simple test endpoint
app.get('/', (req, res) => {
  res.send('Travel OData Service is running');
});

app.use('/odata/$metadata', require('./routes/metadata'));
app.use('/odata/Travels', require('./routes/travels'));

// Start server
const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
