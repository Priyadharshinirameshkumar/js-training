/*
Node.js first checks built-in modules. Since "dayjs" is not built-in,
it looks inside the node_modules folder, finds the dayjs package,
and loads it so we can use its date functions.
*/

const dayjs = require("dayjs");
console.log("Today:", dayjs().format("YYYY-MM-DD"));
console.log("Day of week:", dayjs().format("dddd"));
console.log(
    "Next week:",
    dayjs().add(7, "day").format("DD MMM YYYY")
);
console.log(
    "Is before 2030?",
    dayjs().isBefore("2030-01-01")
);