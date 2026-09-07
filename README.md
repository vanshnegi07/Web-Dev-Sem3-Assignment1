# Smart Utility Toolkit

A collection of small backend utilities built using only Node.js core
modules (`process`, `http`, `fs`, `crypto`) — no external packages or
frameworks.

## Requirements
- Node.js installed (any recent version, v14+)

## Project Structure
```
smart-utility-toolkit/
├── calculator.js       # CLI calculator (process.argv)
├── app.js              # Demonstrates custom module reuse
├── server.js           # HTTP server with routes (http module)
├── fileManager.js       # File CRUD operations (fs module)
├── dice.js             # Secure random dice roller (crypto module)
├── test.txt            # Sample file used by fileManager.js
├── modules/
│   ├── isEven.js        # Custom module: checks even/odd
│   └── logger.js        # Custom module: colored, timestamped logs
└── README.md
```

## How to Run Each Utility

### 1. CLI Calculator
```
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

### 2. Custom Module Demo (isEven + logger)
```
node app.js
```

### 3. HTTP Server
```
node server.js
```
Then open in your browser:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/anything-else (404)

### 4. File Manager (Create, Read, Update, Delete)
```
node fileManager.js
```
Watch the terminal — it creates `test.txt`, reads it, appends to it,
reads it again, then deletes it.

### 5. Dice Generator
```
node dice.js
node dice.js 5
```
Rolls are also saved with timestamps to `dice-history.txt` (bonus feature).

## Bonus Features Implemented
- Colored terminal output via ANSI escape codes (`modules/logger.js`)
- Timestamped logs in the logger module
- Calculator supports add, subtract, multiply, and divide
- Dice roll history is stored in `dice-history.txt`

## Notes
- All randomness uses `crypto.randomInt()` for secure random values.
- All file operations use synchronous `fs` methods for simplicity and
  clear, ordered console output.
