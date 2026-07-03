// Import the built-in File System module.
const fs = require("fs");
// writeFileSync()
// Creates a new file or overwrites an existing file.
fs.writeFileSync(
    "nodejs/session1/output.txt",
    "Hello from Node.js file system!"
);
// Read the file contents.
const content = fs.readFileSync(
    "nodejs/session1/output.txt",
    "utf8"
);
console.log("File content:", content);
// Adds new content to the end of an existing file.
fs.appendFileSync(
    "nodejs/session1/output.txt",
    "\nThis line was appended."
);
// Read the updated file again.
const updated = fs.readFileSync(
    "nodejs/session1/output.txt",
    "utf8"
);
console.log("Updated content:", updated);

/*
writeFileSync()
- Creates a new file if it doesn't exist.
- If the file already exists, it replaces all existing content.

appendFileSync()
- Adds new content to the end of the existing file.
- It does not remove or replace the existing content.
*/