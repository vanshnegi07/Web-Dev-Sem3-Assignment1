// fileManager.js
// A file manager implementing Create, Read, Update, and Delete operations
// using Node.js's core "fs" module.
//
// Usage: node fileManager.js

const fs = require("fs");
const path = require("path");
const logger = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

function createFile() {
  logger.info("Creating File...");
  fs.writeFileSync(filePath, "Hello Node.js\n");
  logger.success("File Created");
}

function readFile() {
  logger.info("Reading File");
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(data.trim());
  } catch (err) {
    logger.error(`File not found: ${err.message}`);
  }
}

function updateFile() {
  logger.info("Updating File...");
  try {
    fs.appendFileSync(filePath, "Learning FS Module\n");
    logger.success("File Updated");
  } catch (err) {
    logger.error(`Could not update file: ${err.message}`);
  }
}

function deleteFile() {
  logger.info("Deleting File...");
  try {
    fs.unlinkSync(filePath);
    logger.success("File Deleted");
  } catch (err) {
    logger.error(`Could not delete file (it may not exist): ${err.message}`);
  }
}

function main() {
  createFile();
  readFile();
  updateFile();
  readFile();
  deleteFile();
}

main();
