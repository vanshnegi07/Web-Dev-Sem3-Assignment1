// calculator.js
// A CLI-based calculator that reads operation and numbers from process.argv.
//
// Usage:
//   node calculator.js <operation> <num1> <num2>
//
// Examples:
//   node calculator.js add 10 5        -> Result: 15
//   node calculator.js sub 10 5        -> Result: 5
//   node calculator.js multiply 10 5   -> Result: 50
//   node calculator.js divide 10 5     -> Result: 2

const logger = require("./modules/logger");

// process.argv[0] = node path, process.argv[1] = script path,
// so real arguments start at index 2.
const [, , operation, arg1, arg2] = process.argv;

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "sub":
    case "subtract":
      return a - b;
    case "mul":
    case "multiply":
      return a * b;
    case "div":
    case "divide":
      if (b === 0) throw new Error("Division by zero is not allowed");
      return a / b;
    default:
      throw new Error(`Invalid operation: "${op}"`);
  }
}

function main() {
  if (!operation || arg1 === undefined || arg2 === undefined) {
    logger.warn("Missing arguments.");
    console.log("Usage: node calculator.js <add|sub|multiply|divide> <num1> <num2>");
    process.exit(1);
  }

  const num1 = Number(arg1);
  const num2 = Number(arg2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    logger.error("Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(operation, num1, num2);
    logger.info(`Performing "${operation}" on ${num1} and ${num2}`);
    console.log(`Result: ${result}`);
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
}

main();
