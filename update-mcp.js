// This script updates the .cursor/mcp.json to include the browsermcp server
const fs = require('fs');
const os = require('os');
const path = require('path');

const file = path.join(os.homedir(), '.cursor', 'mcp.json');
let json;
try {
  json = JSON.parse(fs.readFileSync(file, 'utf-8'));
} catch (e) {
  console.error(`Failed to read or parse ${file}:`, e);
  process.exit(1);
}

json.mcpServers = json.mcpServers || {};
json.mcpServers.browsermcp = { command: 'npx', args: ['@browsermcp/mcp@latest'] };

fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf-8');
console.log(`Successfully updated MCP servers in ${file}`); 