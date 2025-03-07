# Using with Cursor's MPC Server

This guide explains how to use this Hello World MCP server with Cursor's MPC server.

## Prerequisites

- Node.js installed on your system
- Cursor IDE installed
- This repository cloned to your local machine

## Setup Steps

1. **Clone and Start the MCP Server**

   ```bash
   git clone https://github.com/arnab0831/hello-world-mcp-server.git
   cd hello-world-mcp-server
   npm install
   npm start
   ```

   This will start the MCP server on port 3000.

2. **Configure Cursor to Use Your MCP Server**

   In Cursor, you can configure it to use your custom MCP server by:

   - Opening Cursor settings
   - Navigate to the MPC/MCP settings section
   - Add your MCP server URL: `http://localhost:3000/mcp`
   - Save the settings

3. **Test the Integration**

   You can test the integration by:
   
   - Opening Cursor
   - Using the MPC features that would call your MCP server
   - Check the console output of your MCP server to see the requests coming in

## Example MCP Functions

This server provides the following MCP functions:

- `hello_world`: Returns a simple hello world message
- `echo`: Returns whatever data you send to it

## Troubleshooting

If you encounter issues:

1. Make sure your MCP server is running
2. Check that the URL is correctly configured in Cursor
3. Look at the console output of your MCP server for any errors
4. Ensure your firewall isn't blocking the connection

## Advanced Usage

For more advanced usage, you can:

1. Add more functions to the `handlers` object in `mcp-handler.js`
2. Modify the request/response format to match Cursor's expectations
3. Add authentication if needed

## Resources

- [Cursor Documentation](https://cursor.sh/docs)
- [MCP Protocol Specification](https://github.com/cursor-ai/mcp-spec) (if available)