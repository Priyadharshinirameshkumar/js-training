console.log("Hello");

// Section 1 - Variables & Types

const name = "Alice";
const age = 25;
const role = "dev";
const isAvailable = true;

console.log(`name is a ${typeof name}`);
console.log(`age is a ${typeof age}`);
console.log(`role is a ${typeof role}`);
console.log(`isAvailable is a ${typeof isAvailable}`);


// Section 2 - Template Literals

console.log(`Hi, I'm ${name} and I'm a ${role}.`);
console.log(`Available: ${isAvailable}`);
console.log(`My name has ${name.length} characters`);


// Section 3 - Arrow Functions

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Alice", "Johnson"));

const isAdult = (age) => age >= 18;
console.log(isAdult(25));

const formatUser = (user) => `${user.name} — ${user.role}`;
console.log(formatUser({ name: "Alice", role: "dev" }));


// Section 4 - Objects & Destructuring

const user = {
  id: 1,
  name: "Alice",
  role: "dev",
  active: true,
  address: {
    city: "Mumbai",
    country: "India"
  }
};

const { name: userName, role: userRole, active } = user;

console.log(userName);
console.log(userRole);
console.log(active);

const {
  address: { city }
} = user;

console.log(city);

const updatedUser = {
  ...user,
  active: false
};

console.log(updatedUser);


// Section 5 - Arrays & Spread

const devs = ["Alice", "Carol"];
const designers = ["Bob", "Dan"];

const team = [...devs, ...designers];
console.log(team);

const teamWithEve = [...team, "Eve"];
console.log(teamWithEve);

const [firstMember, secondMember] = team;

console.log(firstMember);
console.log(secondMember);


// Section 6 - Array map & filter

const users = [
  { id: 1, name: "Alice", role: "dev", active: true },
  { id: 2, name: "Bob", role: "design", active: false },
  { id: 3, name: "Carol", role: "dev", active: true },
  { id: 4, name: "Dan", role: "design", active: true },
  { id: 5, name: "Eve", role: "dev", active: false }
];

const activeUsers = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeUsers);

const devUsers = users.filter(user => user.role === "dev");
console.log(devUsers);

const userDescriptions = users.map(
  user => `${user.name} is a ${user.role}`
);

console.log(userDescriptions);

const activeDevs = users
  .filter(user => user.active && user.role === "dev").map(user => user.name);

console.log(activeDevs);


// Section 7 - Array Functions

const countByRole = users.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});

console.log(countByRole);

const firstActiveDesigner = users.find(
  user => user.role === "design" && user.active
);

console.log(firstActiveDesigner);

const hasInactiveUser = users.some(user => !user.active);
console.log(hasInactiveUser);

const allHaveRoles = users.every(user => user.role);
console.log(allHaveRoles);


// Section 8 - Spot & Fix the Bugs

// 1. Loose equality trap

const input = "5";
const score = 5;

// Wrong: == compares values after type conversion
// Correct: === compares both value and type

if (input === score) {
console.log("match");
}

// 2. Missing return in arrow function

// Wrong: no return statement inside curly braces
// Correct: return the value

const doubled = [1, 2, 3].map(n => {
return n * 2;
});

console.log(doubled);

// 3. Mutating original array

const original = [1, 2, 3];

// Wrong: push() changes the original array
// Correct: use spread operator to create a new array

const updatedArray = [...original, 4];

console.log(original);
console.log(updatedArray);

// 4. const object reassignment confusion

const userInfo = {
name: "Alice",
active: true
};

// This does NOT throw an error because
// object properties can be modified

userInfo.active = false;

console.log(userInfo);

// This WOULD throw an error because
// const variables cannot be reassigned

// userInfo = { name: "Bob" };
// Error: Assignment to constant variable


// Section 9 - Things to Be Aware Of

// 1. Case Sensitivity

const Username = "Alice";
const username = "Bob";

// JavaScript treats these as different variables

console.log(Username);
console.log(username);

// 2. undefined vs null

const a = null;
const b = undefined;

console.log(typeof a);
console.log(typeof b);

/*
null = intentional empty value
typeof null returns "object"

undefined = value not assigned
typeof undefined returns "undefined"
*/

// 3. Call Order Matters

// Arrow functions are not hoisted
// Function must be declared before calling

const greet = (name) => `Hello, ${name}`;

console.log(greet("Alice"));

/*
If greet() is called before declaration,
ReferenceError occurs.
*/

// 4. Semicolons

// Both styles work in JavaScript.
// Use one style consistently.

const p = 10;
const q = 20;

console.log(p + q);
