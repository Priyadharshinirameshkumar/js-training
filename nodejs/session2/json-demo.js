const fs = require("fs");
const path = require("path");

// Create the path to data.json
const filePath = path.join(__dirname, "data.json");

// Read the JSON file as text
const raw = fs.readFileSync(filePath, "utf8");

// Convert JSON text into JavaScript objects
const users = JSON.parse(raw);

console.log("All users:", users);

console.log("Total:", users.length);

// Filter users with score >= 90
const top = users.filter(user => user.score >= 90);

console.log(
    "Top scorers:",
    top.map(user => user.name)
);

// Calculate the average score
const avg =
    users.reduce(
        (sum, user) => sum + user.score,
        0
    ) / users.length;

console.log(
    "Average score:",
    avg.toFixed(1)
);

/*
JSON.parse():
Converts a JSON string into a JavaScript object or array.

Without JSON.parse(),
the data remains a plain string, so we cannot access properties
like users[0].name or use array methods such as filter() and reduce().
*/

// Add a new user
const newUser = {
    id: 5,
    name: "Vikram",
    role: "intern",
    score: 88
};

users.push(newUser);

// Convert JavaScript array to JSON
const updated = JSON.stringify(users, null, 2);

// Write updated JSON back to the file
fs.writeFileSync(filePath, updated);

console.log("User added and file updated");

// Read again to verify
const verify = JSON.parse(
    fs.readFileSync(filePath, "utf8")
);

console.log("Total after update:", verify.length);

/*
JSON.stringify(users, null, 2)

- Converts the JavaScript array into a JSON string.
- null means no custom replacer function is used.
- 2 means the JSON is formatted with 2 spaces of indentation,
  making it easy for humans to read.

Without null, 2, the JSON would be written on a single line,
making it difficult to read.
*/

// Read the latest data from the JSON file
const currentData = JSON.parse(
    fs.readFileSync(filePath, "utf8")
);

// Find the index of Amit
const index = currentData.findIndex(
    user => user.name === "Amit"
);

// Update Amit's score
if (index !== -1) {

    currentData[index].score = 90;

    // Save the updated data back to the file
    fs.writeFileSync(
        filePath,
        JSON.stringify(currentData, null, 2)
    );

    console.log("Amit score updated to 90");

}

/*
Array.find()
Returns the first matching object.

Array.findIndex()
Returns the index (position) of the matching object.

findIndex() is useful when we want to update or remove an element
because the index allows direct modification of the array.
*/