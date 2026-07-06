const path = require("path");

// __dirname returns the current folder path
console.log("Current directory:", __dirname);

// __filename returns the current file path
console.log("Current file:", __filename);

// path.join() joins folder names safely
const filePath = path.join(__dirname, "data", "users.json");
console.log("Joined path:", filePath);

// Returns only the file name
console.log("Basename:", path.basename("/home/user/notes.txt"));

// Returns only the file extension
console.log("Extension:", path.extname("index.html"));

// Returns only the directory name
console.log("Dirname:", path.dirname("/home/user/notes.txt"));


// Manual string concatenation — fragile
const manual = __dirname + "/data/users.json";
console.log("Manual:    ", manual);

// path.join() — safe across all operating systems
const joined = path.join(__dirname, "data", "users.json");
console.log("path.join: ", joined);

// path.resolve() — always returns an absolute path
const resolved = path.resolve("data", "users.json");
console.log("Resolved:  ", resolved);

/*
Difference between path.join() and path.resolve():

- path.join() joins multiple path segments into one path.
- path.resolve() converts a path into an absolute path starting from the current working directory.
- path.join() is mainly used for joining folders and filenames.
- path.resolve() is used when an absolute path is required.
*/