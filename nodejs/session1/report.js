
const fs = require("fs");
const dayjs = require("dayjs");
const raw = fs.readFileSync(
    "nodejs/session1/data.json",
    "utf8"
);
const data = JSON.parse(raw);
const role = process.argv[2];
const users = data.users.filter(function (user) {
    return user.role === role;
});
console.log(
    "Report generated on:",
    dayjs().format("DD MMM YYYY")
);

console.log("Role:", role);

console.log("----------------");
users.forEach(function (user, index) {

    console.log(
        `${index + 1}. ${user.name} (ID: ${user.id})`
    );

});

console.log("----------------");

// Display total users
console.log(
    `Total: ${users.length} user(s) found`
);