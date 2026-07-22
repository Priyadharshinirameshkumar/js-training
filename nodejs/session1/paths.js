
const path = require("path");
console.log("Directory name:", __dirname);
console.log("File name:", __filename);
const joined = path.join(__dirname, "data", "users.json");
console.log("Joined path:", joined);
console.log("Extension:", path.extname("index.html"));
console.log("Basename:", path.basename("/users/rahul/notes.txt"));
console.log("Dirname:", path.dirname("/users/rahul/notes.txt"));

/*
path.join() is preferred because it automatically uses the
correct path separator for the operating system (Windows or Linux/macOS),
making the code portable and avoiding path formatting errors.
*/