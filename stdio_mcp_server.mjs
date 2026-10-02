#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "rwnomad",
  boardId: "rwnomad-official",
  domain: "rwnomad.com",
  npmName: "zc-rwnomad-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
