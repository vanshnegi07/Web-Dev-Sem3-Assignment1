// server.js
// A basic HTTP server built using Node.js's core "http" module (no Express).
//
// Usage: node server.js
// Then visit:
//   http://localhost:3000/
//   http://localhost:3000/about
//   http://localhost:3000/contact
//   http://localhost:3000/anything-else  -> 404

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const routes = {
  "/": "Welcome to Node Server",
  "/about": "About Page",
  "/contact": "Contact Page",
};

const server = http.createServer((req, res) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  const body = routes[req.url];

  if (body) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(body);
    logger.success(`Responded 200 for ${req.url}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
    logger.warn(`Responded 404 for ${req.url}`);
  }
});

server.listen(PORT, () => {
  logger.success(`Server is running at http://localhost:${PORT}/`);
});
