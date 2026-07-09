#!/usr/bin/env node
// foldkit-mcp · MCP stdio server wrapping foldkit-sdk · MIT · AI-Native Solutions
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const server = new Server({ name: 'foldkit-mcp', version: '1.0.0' }, { capabilities: { tools: {} } });

const TOOLS = [
  {
    name: 'foldkit_render_state_vector',
    description: 'renderStateVector · from foldkit-sdk',
    inputSchema: { type: 'object', properties: {} },
    handler: async (args) => {
      const { renderStateVector } = await import('@ai-native-solutions/foldkit-sdk');
      return typeof renderStateVector === 'function' ? await renderStateVector(args) : { error: 'renderStateVector not callable' };
    }
  },
  {
    name: 'foldkit_update_fold_num',
    description: 'updateFoldNum · from foldkit-sdk',
    inputSchema: { type: 'object', properties: {} },
    handler: async (args) => {
      const { updateFoldNum } = await import('@ai-native-solutions/foldkit-sdk');
      return typeof updateFoldNum === 'function' ? await updateFoldNum(args) : { error: 'updateFoldNum not callable' };
    }
  },
  {
    name: 'foldkit_update_kawasaki',
    description: 'updateKawasaki · from foldkit-sdk',
    inputSchema: { type: 'object', properties: {} },
    handler: async (args) => {
      const { updateKawasaki } = await import('@ai-native-solutions/foldkit-sdk');
      return typeof updateKawasaki === 'function' ? await updateKawasaki(args) : { error: 'updateKawasaki not callable' };
    }
  },
  {
    name: 'foldkit_render_ops_grid',
    description: 'renderOpsGrid · from foldkit-sdk',
    inputSchema: { type: 'object', properties: {} },
    handler: async (args) => {
      const { renderOpsGrid } = await import('@ai-native-solutions/foldkit-sdk');
      return typeof renderOpsGrid === 'function' ? await renderOpsGrid(args) : { error: 'renderOpsGrid not callable' };
    }
  },
  {
    name: 'foldkit_render_ops_log',
    description: 'renderOpsLog · from foldkit-sdk',
    inputSchema: { type: 'object', properties: {} },
    handler: async (args) => {
      const { renderOpsLog } = await import('@ai-native-solutions/foldkit-sdk');
      return typeof renderOpsLog === 'function' ? await renderOpsLog(args) : { error: 'renderOpsLog not callable' };
    }
  },
  {
    name: 'foldkit_render_kappa_view',
    description: 'renderKappaView · from foldkit-sdk',
    inputSchema: { type: 'object', properties: {} },
    handler: async (args) => {
      const { renderKappaView } = await import('@ai-native-solutions/foldkit-sdk');
      return typeof renderKappaView === 'function' ? await renderKappaView(args) : { error: 'renderKappaView not callable' };
    }
  }
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS.map(({ handler, ...rest }) => rest)
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const t = TOOLS.find(x => x.name === req.params.name);
  if (!t) throw new Error('unknown tool: ' + req.params.name);
  const result = await t.handler(req.params.arguments || {});
  return { content: [{ type: 'text', text: JSON.stringify(result) }] };
});

await server.connect(new StdioServerTransport());
console.error('foldkit-mcp v1.0.0 · stdio ready');
