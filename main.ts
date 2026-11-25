// A serving size that sounds like a warning label in hindsight.
// Four portions, one eater, no lights on — the math only makes sense backwards.
// The punchline reframes the recipe as a crime scene that needed an audience.
// The laugh lands on the last two words, after the setup has already walked past.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const text = readFileSync(entryPath, "utf8");

if (text.trim().length === 0 || text.length > 200) {
  console.error("entry.txt must hold 1-200 characters of non-whitespace text");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
