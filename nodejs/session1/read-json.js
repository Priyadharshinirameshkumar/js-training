
const fs = require("fs");
const raw = fs.readFileSync(
    "nodejs/session1/data.json",
    "utf8"
);

// Convert JSON text into a JavaScript object
const data = JSON.parse(raw);

// Display all users
console.log("All users:", data.users);

// Display the first user's name
console.log("First user:", data.users[0].name);

// Filter users whose role is "intern"
const interns = data.users.filter(
    user => user.role === "intern"
);

// Display only intern names
console.log(
    "Interns:",
    interns.map(user => user.name)
);

/*
Converts a JSON string into a JavaScript object
so that the data can be accessed and manipulated
using JavaScript.
If the JSON file has a syntax error, such as a missing comma
or an unclosed bracket, JSON.parse() throws a SyntaxError
and the program cannot continue until the JSON is corrected.
*/