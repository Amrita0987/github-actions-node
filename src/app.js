const http = require('http');

 

// Define the hostname and port where your server will listen

const hostname = '127.0.0.1'; // Use '0.0.0.0' to listen on all available network interfaces

const port = 3000; // You can use any available port

 

// Create a simple HTTP server

const server = http.createServer((req, res) => {

  // Set the response header with a 200 OK status and plain text content type

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

 

  // Send a "Hello, World!" message as the response

  res.end('Hello, World!\n');

});

 

// Start the server and listen on the specified hostname and port

server.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);

});
