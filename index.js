const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { processMcpRequest } = require('./mcp-handler');

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

// MCP endpoint that processes requests using the MCP handler
app.post('/mcp', (req, res) => {
  console.log('Received MCP request:', JSON.stringify(req.body, null, 2));
  
  // Process the request using our MCP handler
  const response = processMcpRequest(req.body);
  
  // Send the response
  res.json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the Hello World message`);
  console.log(`Send POST requests to http://localhost:${PORT}/mcp for MCP functionality`);
  console.log('Available MCP functions:');
  console.log('- hello_world: Returns a hello world message');
  console.log('- echo: Returns whatever was sent to it');
});