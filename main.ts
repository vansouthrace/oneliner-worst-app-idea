import * as fs from "node:fs";

const entry = "Blinkr: an app that tracks how often you blink, then sends a push notification every time you forget to blink, because your eyelids deserve analytics too.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
