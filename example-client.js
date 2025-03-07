/**
 * Example client for the Hello World MCP Server
 * 
 * This file demonstrates how to make requests to the MCP server.
 * Run this with: node example-client.js
 */

const fetch = require('node-fetch');

// MCP server URL
const MCP_SERVER_URL = 'http://localhost:3000/mcp';

/**
 * Make a request to the MCP server
 * @param {string} functionName - The MCP function to call
 * @param {Object} parameters - Parameters to pass to the function
 * @returns {Promise<Object>} - The response from the server
 */
async function callMcpFunction(functionName, parameters = {}) {
  try {
    const response = await fetch(MCP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        function: functionName,
        parameters: parameters
      }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error calling MCP function:', error);
    return {
      status: 'error',
      error: {
        message: error.message || 'Unknown error',
        code: 'CLIENT_ERROR'
      }
    };
  }
}

// Example usage
async function runExamples() {
  console.log('Calling hello_world function...');
  const helloResponse = await callMcpFunction('hello_world');
  console.log('Response:', JSON.stringify(helloResponse, null, 2));
  
  console.log('\nCalling echo function...');
  const echoResponse = await callMcpFunction('echo', {
    message: 'This is a test message',
    timestamp: new Date().toISOString(),
    data: {
      key1: 'value1',
      key2: 'value2'
    }
  });
  console.log('Response:', JSON.stringify(echoResponse, null, 2));
  
  console.log('\nCalling unknown function...');
  const unknownResponse = await callMcpFunction('unknown_function', {
    test: 'This should return an error'
  });
  console.log('Response:', JSON.stringify(unknownResponse, null, 2));
}

// Run the examples
runExamples().catch(console.error);