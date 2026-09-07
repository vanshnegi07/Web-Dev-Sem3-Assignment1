// app.js
// Demonstrates creating and reusing custom modules with require().
//
// Usage: node app.js

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.info("Starting isEven module demo...");

const numbersToCheck = [2, 7, 10, 15, 42, 101];

numbersToCheck.forEach((num) => {
  const result = isEven(num) ? "even" : "odd";
  console.log(`${num} is ${result}`);
});

logger.success("isEven module demo complete.");
