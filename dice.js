// dice.js
// A dice roll simulator that uses Node.js's core "crypto" module
// to generate cryptographically secure random numbers (1-6).
//
// Usage:
//   node dice.js          -> rolls once
//   node dice.js 5        -> rolls 5 times and saves history to dice-history.txt (bonus)

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const historyPath = path.join(__dirname, "dice-history.txt");

// crypto.randomInt(min, maxExclusive) gives a secure random integer.
function rollDice() {
  return crypto.randomInt(1, 7); // 1 to 6 inclusive
}

function saveToHistory(entries) {
  const lines = entries
    .map((val, i) => `[${new Date().toISOString()}] Roll ${i + 1}: ${val}`)
    .join("\n");
  fs.appendFileSync(historyPath, lines + "\n");
}

function main() {
  const rollsArg = Number(process.argv[2]) || 1;
  const results = [];

  logger.info(`Rolling the dice ${rollsArg} time(s)...`);

  for (let i = 0; i < rollsArg; i++) {
    const value = rollDice();
    results.push(value);
    console.log(`Dice Rolled: ${value}`);
  }

  saveToHistory(results);
  logger.success(`Saved ${results.length} roll(s) to dice-history.txt`);
}

main();
