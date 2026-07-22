const os = require("os");
const http = require("http");
const fs = require("fs");
const path = require("path");

// Build path to data.json
const filePath = path.join(__dirname, "data.json");

// Create server
const server = http.createServer((req, res) => {

    // Log every request
    console.log(`${req.method} ${req.url}`);

    // Read users from JSON file
    const raw = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(raw);

    // All responses are JSON
    res.setHeader("Content-Type", "application/json");

    // -----------------------
    // GET /users
    // -----------------------

    if (req.method === "GET" && req.url === "/users") {

        res.writeHead(200);

        res.end(JSON.stringify(users));

    }

    // -----------------------
    // GET /users/top
    // -----------------------

    else if (req.method === "GET" && req.url === "/users/top") {

        const topUsers = users.filter(user => user.score >= 90);

        res.writeHead(200);

        res.end(JSON.stringify(topUsers));

    }

    // -----------------------
    // GET /users/:id
    // -----------------------

    else if (
        req.method === "GET" &&
        req.url.startsWith("/users/")
    ) {

        const id = Number(req.url.split("/")[2]);

        const user = users.find(user => user.id === id);

        if (user) {

            res.writeHead(200);

            res.end(JSON.stringify(user));

        } else {

            res.writeHead(404);

            res.end(
                JSON.stringify({
                    error: "User not found"
                })
            );

        }

    }


    // -----------------------
// GET /health
// -----------------------

else if (req.method === "GET" && req.url === "/health") {

    const health = {

        status: "ok",

        platform: os.platform(),

        memory: {

            totalMB: Math.round(
                os.totalmem() / 1024 / 1024
            ),

            freeMB: Math.round(
                os.freemem() / 1024 / 1024
            )

        },

        uptime: Number(
            process.uptime().toFixed(2)
        )

    };

    res.writeHead(200);

    res.end(JSON.stringify(health));

}

/*
Health check endpoints are used to verify that a server is running correctly.

Monitoring tools such as Kubernetes, Docker, cloud platforms, and load balancers
periodically call the /health endpoint to check whether the application is healthy.
If the server*/

    // -----------------------
    // Unknown Route
    // -----------------------

    else {

        res.writeHead(404);

        res.end(
            JSON.stringify({
                error: "Route not found"
            })
        );

    }

});

// Start server
server.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});