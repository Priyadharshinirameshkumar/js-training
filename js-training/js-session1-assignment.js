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

// 1. Loose Equality Trap

const input = "5";
const score = 5;

/*
The == operator checks only whether the values are equal.
Before comparing, JavaScript automatically converts the data types.

Here, "5" is a string and 5 is a number.
When using ==, JavaScript converts "5" into the number 5,
so the condition becomes true.

To avoid unexpected results, use ===.
The === operator compares both value and data type.
*/

if (input === score) {
  console.log("match");
}


// 2. Missing Return in Arrow Function

/*
When an arrow function uses curly braces {},
we must explicitly return a value.

In the original code, n * 2 was calculated,
but it was never returned.

Because of that, map() received undefined for every element
and produced [undefined, undefined, undefined].

Adding the return statement fixes the problem.
*/

const doubled = [1, 2, 3].map(n => {
  return n * 2;
});

console.log(doubled);


// 3. Mutating Original Array

const original = [1, 2, 3];

/*
The push() method directly modifies the original array.

Sometimes we need to keep the original data unchanged
and create a new array instead.

The spread operator (...) copies all elements from the
original array and allows us to add new values without
changing the original array.
*/

const updatedArray = [...original, 4];

console.log(original);
console.log(updatedArray);


// 4. const Object Reassignment Confusion

const userInfo = {
  name: "Alice",
  active: true
};

/*
Many beginners think that a const object cannot be changed.

Actually, const only prevents the variable from pointing
to a different object.

The properties inside the object can still be modified.

So changing userInfo.active works without any error.

However, assigning a completely new object to userInfo
will cause an error because const variables cannot be reassigned.
*/

userInfo.active = false;

console.log(userInfo);

// userInfo = { name: "Bob" };
// Error: Assignment to constant variable

// Section 9 - Things to Be Aware Of

// 1. Case Sensitivity

const Username = "Alice";
const username = "Bob";

/*
Explanation:

JavaScript is case-sensitive.

This means uppercase and lowercase letters
are treated differently.

So Username and username are considered
two completely different variables.

Because of this, both variables can store
different values without any conflict.
*/

console.log(Username);
console.log(username);


// 2. undefined vs null

const a = null;
const b = undefined;

console.log(typeof a);
console.log(typeof b);

/*
null means the value is intentionally empty.

We use null when we want to indicate that a variable
currently has no value.

undefined means a value has not been assigned yet.

Although typeof null returns "object",
this is a well-known behavior of JavaScript.

typeof undefined returns "undefined".
*/


// 3. Call Order Matters

/*
Arrow functions are not fully hoisted.

If we try to call the function before it is created,
JavaScript will throw a ReferenceError.

To avoid this, always declare the arrow function first
and then call it afterwards.
*/

const greet = (name) => `Hello, ${name}`;

console.log(greet("Alice"));

/*
If greet() is called before its declaration,
JavaScript cannot find the function yet
and throws an error.
*/


// 4. Semicolons

/*
JavaScript allows code to be written with
or without semicolons in many situations.

However, mixing both styles in the same file
can make the code look inconsistent.

It is considered a good practice to choose
one style and use it throughout the project.
*/

const p = 10;
const q = 20;

console.log(p + q);