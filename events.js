const Events = require("events");
const event = new Events();
let count = 0;
event.on("hello", () => {
  console.log(++count);
});

const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

// Listen for the 'request' event
server.on("request", (req, res) => {
  console.log("Request received!");
  event.emit("hello");
});

// Listen for the 'close' event
server.on("close", () => {
  console.log("Server closed!");
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
