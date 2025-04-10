/**
 * MCP Handler - Implements specific MCP functionality
 * 
 * This file demonstrates how to structure an MCP server with specific handlers
 * for different MCP functions.
 */

// Example MCP function handlers
const handlers = {
  // Hello World function
  hello_world: (params) => {
    return {
      message: 'Hello, World from MCP Server!',
      params: params
    };
  },

  // Echo function - returns whatever was sent
  echo: (params) => {
    return {
      message: 'Echo from MCP Server',
      data: params
    };
  },

  // Default handler for unknown functions
  default: (functionName, params) => {
    return {
      message: `Unknown function: ${functionName}`,
      params: params
    };
  },

  time_now: require('./models/time')
};

/**
 * Process an MCP request
 * @param {Object} request - The MCP request object
 * @returns {Object} - The response object
 */
function processMcpRequest(request) {
  try {
    // Extract function name and parameters from request
    const functionName = request.function || 'hello_world';
    const params = request.parameters || {};

    // Call the appropriate handler or default if not found
    const handler = handlers[functionName] || ((params) => handlers.default(functionName, params));
    const result = handler(params);

    // Return success response
    return {
      status: 'success',
      data: result
    };
  } catch (error) {
    // Return error response
    console.error('Error processing MCP request:', error);
    return {
      status: 'error',
      error: {
        message: error.message || 'Unknown error',
        code: 'INTERNAL_ERROR'
      }
    };
  }
}

module.exports = {
  processMcpRequest,
  handlers
};