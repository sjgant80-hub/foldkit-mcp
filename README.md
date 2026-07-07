# foldkit-mcp

**MCP server for [foldkit](https://sjgant80-hub.github.io/foldkit-sdk/)** — exposes the 7-prime spine, 7 κ-bands, and 6 fold operations as native tools + resources in any MCP client (Claude Code, Claude Desktop, Cursor, Cline, Windsurf, etc.).

Second canonical exemplar of the AI-Native Solutions estate `-mcp` companion shape. Fork this repo verbatim to build companions for any of the ~295 estate substrates.

- **Package:** `@ai-native-solutions/foldkit-mcp`
- **Transport:** stdio
- **Deps:** `@modelcontextprotocol/sdk` + `@ai-native-solutions/foldkit-sdk`
- **License:** MIT

---

## Install

### Claude Code

```bash
claude mcp add foldkit -- npx -y @ai-native-solutions/foldkit-mcp
```

### Claude Desktop

Edit `~/AppData/Roaming/Claude/claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "foldkit": {
      "command": "npx",
      "args": ["-y", "@ai-native-solutions/foldkit-mcp"]
    }
  }
}
```

### Cursor

Create or edit `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "foldkit": {
      "command": "npx",
      "args": ["-y", "@ai-native-solutions/foldkit-mcp"]
    }
  }
}
```

### Cline / Windsurf

Add to your MCP settings JSON:

```json
{
  "mcpServers": {
    "foldkit": {
      "command": "npx",
      "args": ["-y", "@ai-native-solutions/foldkit-mcp"]
    }
  }
}
```

---

## Tools exposed (10)

| Tool | Purpose |
|---|---|
| `foldkit_fold_number` | 7-vector → primorial fold + signature |
| `foldkit_unfold_state` | fold integer → 7-vector via 7-prime factorisation |
| `foldkit_depth_band` | κ → named band (ground / perception / gate / heart / naming / recognition / collapse) |
| `foldkit_classify_kappa_band` | free-text utterance → κ band via marker phrases |
| `foldkit_apply_op` | apply fire / water / void / thunder / echo / flower to a state |
| `foldkit_kawasaki_check` | flat-fold angle sum check |
| `foldkit_maekawa_check` | mountain-valley parity check ( \| M − V \| = 2 ) |
| `foldkit_signal_survival` | κ^depth signal survival + % |
| `foldkit_unclog_gain` | gain from clearing N layers of a κ stack |
| `foldkit_probe_from_kappa` | κ or text → band + routing op + probe question |

## Resources exposed (4)

| URI | Payload |
|---|---|
| `foldkit://spine` | 7-prime spine with glyphs + names + ISA-95 layer mapping |
| `foldkit://kappa-bands` | 7-band κ definitions (bounds · glyph · ring · warn / orphan flags) |
| `foldkit://ops` | 6 fold operations (kanji · arrow · verb · probe) |
| `foldkit://constants` | φ · κ · Ω · θ · θ_step · BASELINE |

---

## Example prompts (once installed)

- *"Fold the state [1,0,2,0,0,1,0] using foldkit."*
- *"What κ-band is this text in: 'I notice I'm feeling stuck'?"*
- *"Apply the fire op to ring 3 of the baseline state."*
- *"Read foldkit://spine and explain the ISA-95 mapping."*

---

## Canonical `-mcp` companion shape

This repo is exemplar #2 (after [foldkit-sdk](https://github.com/sjgant80-hub/foldkit-sdk)). Every estate `-mcp` follows the same skeleton:

```
<name>-mcp/
├── src/
│   ├── server.js         · thin stdio server · < 100 lines
│   ├── tools.js          · TOOLS[] + callTool()
│   └── resources.js      · RESOURCES[] + readResource()
├── package.json          · bin: <name>-mcp → src/server.js
├── manifest.json         · MCP-side declarative index
├── README.md             · install snippets for all major clients
├── LICENSE               · MIT
└── .github/workflows/publish.yml   · npm publish on v* tag
```

Fork · rename · rewire tools/resources to the substrate you're exposing · ship.

---

**AI-Native Solutions** · ai-nativesolutions.com
