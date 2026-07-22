const http = require("http");

// Create the HTTP server
const server = http.createServer((req, res) => {

    // Display every incoming request
    console.log(`${req.method} ${req.url}`);

    // Home route
    if (req.url === "/") {

        res.writeHead(200, {
    "Content-Type": "text/html"
});

res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Welcome to Node.js Server</h1>
    <p>This page is served using HTML.</p>
</body>
</html>
`);
          
    }

    // About route
    else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("About page");

    }

    // Status route
    else if (req.url === "/status") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(
            JSON.stringify({

                status: "ok",

                uptime: process.uptime()

            })
        );

    }

    // Unknown route
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 — Page not found");

    }

});

// Start server
server.listen(3001, () => {

    console.log("Server running at http://localhost:3001");

});

/*
process.uptime()
Returns the number of seconds the Node.js server has been running.

Content-Type: application/json
Tells the browser that the response is JSON data instead of plain text.
*/