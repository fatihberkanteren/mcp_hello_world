const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple Hello World endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// MCP endpoint that responds with Hello World to any request
app.post('/mcp', (req, res) => {
  console.log('Received MCP request:', req.body);
  
  // Always respond with Hello World
  res.json({
    status: 'success',
    data: {
      message: 'Hello, World from MCP Server!'
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the Hello World message`);
  console.log(`Send POST requests to http://localhost:${PORT}/mcp for MCP functionality`);
});