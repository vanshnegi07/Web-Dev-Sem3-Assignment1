// modules/logger.js
// A reusable logger module with timestamps and ANSI colored output.
// Bonus: colored terminal output + timestamp logs.

const COLORS = {
  reset: "\x1b[0m",
  info: "\x1b[36m",    // cyan
  success: "\x1b[32m", // green
  error: "\x1b[31m",   // red
  warn: "\x1b[33m",    // yellow
};

function timestamp() {
  return new Date().toISOString();
}

function log(message, type = "info") {
  const color = COLORS[type] || COLORS.info;
  console.log(`${color}[${timestamp()}] [${type.toUpperCase()}] ${message}${COLORS.reset}`);
}

module.exports = {
  info: (msg) => log(msg, "info"),
  success: (msg) => log(msg, "success"),
  error: (msg) => log(msg, "error"),
  warn: (msg) => log(msg, "warn"),
};
