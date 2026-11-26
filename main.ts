import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label a museum in the year 3000 puts beside an ordinary object from today (one line, 200 characters max).
// The joke: the future misreads the object, and the misreading is still true.
const LIMIT = 200;
const label = "Self-Checkout Kiosk, c. 2025. Confession booth. The faithful were accused of an 'unexpected item in the bagging area' and stood in shame until a robed attendant arrived with a key to absolve them.";

const chars = [...label].length;
if (!label.trim() || chars > LIMIT) throw new Error(`label is ${chars} characters; limit ${LIMIT}`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), label, "utf8");
console.log(`${chars}/${LIMIT} ${label}`);
