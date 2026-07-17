const fs = require("fs");
const path = require("path");

// Create the file path
const filePath = path.join(__dirname, "output.txt");

// Write data to the file
fs.writeFileSync(filePath, "Line 1 — written by Node.js");
console.log("File written");

// Read the file
const content = fs.readFileSync(filePath, "utf8");
console.log("Content:", content);

// Append new lines
fs.appendFileSync(filePath, "\nLine 2 — appended");
fs.appendFileSync(filePath, "\nLine 3 — appended again");

// Read the updated file
const updated = fs.readFileSync(filePath, "utf8");
console.log("Updated:\n", updated);

/*
writeFileSync():
Creates a new file or overwrites the existing file with new content.

appendFileSync():
Adds new content to the end of an existing file without removing the previous content.
*/

// Check if a file exists
const checkPath = path.join(__dirname, "missing.txt");

if (fs.existsSync(checkPath)) {

    console.log("File exists");

} else {

    console.log("File does not exist — creating it");

    fs.writeFileSync(
        checkPath,
        "Created because it was missing"
    );

}

/*
Without checking if a file exists, readFileSync() throws an
ENOENT (Error NO ENTry) if the file is missing.

A better approach is to use fs.existsSync() before reading
or handle the error using try...catch.
*/