import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Charm the Commuter: Forecast a City That Isn't — make.fun entry (program/v1, Node 22).
// A morning weather forecast for a fictional city, Yawnfield.
// Entry is 118 characters (gate 1–140). Verified deterministic: two local
// runs write byte-identical entry.txt.
const ENTRY =
  "Good morning, Yawnfield: 11°C, drizzle till nine, and the sun is running late too — it missed the 7:40, just like you.";

// Gate self-check: 1–140 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-140`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
