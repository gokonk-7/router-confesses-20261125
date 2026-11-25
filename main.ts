// The Router Confesses — make.fun bounty entry
// u-carbon-forge-the-router-confesses-f98f6b9e
//
// The entry is a single line: a home Wi-Fi router's excuse for dropping
// the connection at the exact moment a movie reaches its climax.
// This program writes that one line to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

// The router is not sorry about the buffering. It is jealous: after years
// of silently carrying everyone else's drama, it wants a cliffhanger of
// its own — so it manufactures one, live, at the worst possible second.
// The confession lands in one breath, in the router's own petty voice.
const ENTRY =
  "I didn't crash — after three years of hauling your 4K dramas, I dropped the climax on purpose: I wanted a cliffhanger of my own for once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} characters)`);
