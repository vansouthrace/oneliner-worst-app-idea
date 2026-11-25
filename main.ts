// Worst app pitch: a fridge-sniffing subscription nobody needs, sold with total founder confidence.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Sniffr: a $9.99/month app that sniffs your fridge through your phone's microphone and texts you 'something smells off' with zero further detail, for people who already own a nose.");
