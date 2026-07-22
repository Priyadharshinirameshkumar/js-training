const http = require("http");

// Create the HTTP server
const server = http.createServer((req, res) => {

    // Log the request method and URL
    console.log(`${req.method} ${req.url}`);

    // Send HTTP status and response type
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    // Send response to the browser
    res.end("Hello from Node.js!");

});

// Start server on port 3000
server.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});

/*
req.method:
Contains the HTTP request method such as GET, POST, PUT, or DELETE.

req.url:
Contains the URL or path requested by the client,
such as "/", "/about", or "/users".
*/

/*
req (Request):
Represents the incoming request from the browser.
It contains information like the URL, request method, and headers.

res (Response):
Represents the response sent back to the browser.
We use it to send status codes, headers, and the response body.
*/