const fs = require("fs");
const path = require("path");

// Create the path to output.txt
const filePath = path.join(__dirname, "output.txt");

// Synchronous File Read

console.log("1 — before sync read");

const data = fs.readFileSync(filePath, "utf8");

console.log(
    "2 — sync read done:",
    data.split("\n").length,
    "lines"
);

console.log("3 — after sync read");

console.log("----------------");


// Asynchronous File Read


console.log("4 — before async read");

fs.readFile(filePath, "utf8", (err, data) => {

    if (err) throw err;

    console.log(
        "6 — async read done:",
        data.split("\n").length,
        "lines"
    );

});

console.log("5 — after async read (does not wait)");

/*
Synchronous operations block the program until the task is completed.

Asynchronous operations do not block the program.
Node.js continues executing the next statements while waiting for the file operation to finish.

This is important for servers because they can handle multiple users without making everyone wait for one slow task.
*/