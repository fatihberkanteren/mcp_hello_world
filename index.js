const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { processMcpRequest } = require('./mcp-handler');

const app = express();
const PORT = process.env.PORT || 10000;
const timeModel = require('./models/time');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple Hello World endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/mcp/time', async (req, res) => {
  const result = await timeModel();
  res.json({ result });
});


// MCP endpoint that processes requests using the MCP handler
app.post('/mcp/time', async (req, res) => {
  const result = await timeModel();
  res.json({ result });
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